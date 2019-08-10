import React, { useState } from "react";
import axios from "axios";

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
import { ILoginState } from "../../hooks/interfaces";
// Import custom hook
import { useLoginValidation } from "../../hooks/loginHooks/useLoginValidation";
// Import validation function
import validateLogin from "../../hooks/loginHooks/validateLogin";

const initialState: ILoginState = {
  email: "",
  password: ""
};

const Login: React.FC = (): JSX.Element => {
  const {
    handleSumbit,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
    errors
  } = useLoginValidation(initialState, validateLogin, authenthicateUser);
  const [dbError, setDBerror] = useState(null);

  async function authenthicateUser(): Promise<void> {
    const { email, password } = values;
    try {
      await axios.post(`http://localhost:8000/api/v1.0/users/login`, {
        email,
        password
      });
    } catch (err) {
      setDBerror(err.response.data.payload.message);
    }
  }

  return (
    <Container>
      <BackToLanding page="/landing" />
      <Logo />
      <FormContainer>
        <h2>Login</h2>
        <hr />
        <StyledForm noValidate onSubmit={handleSumbit}>
          E-mail <br />
          <input
            name="email"
            type="email"
            placeholder="address@email.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && "inputError"}
          />
          {errors.email && <StyledFormError>{errors.email}</StyledFormError>}
          <br />
          Password <br />
          <input
            name="password"
            type="password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && "inputError"}
          />
          {errors.password && (
            <StyledFormError>{errors.password}</StyledFormError>
          )}
          {dbError && <StyledFormError>{dbError}</StyledFormError>}
          <StyledButton disabled={isSubmitting} type="submit">
            {isSubmitting ? "Logging in..." : "Login"}
          </StyledButton>
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
