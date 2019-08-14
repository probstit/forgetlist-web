import React, { useState } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/useFormValidation";
// Import form validation function to work with custom hook
import validateForm from "../../hooks/validateForm";
// Import styled components
import {
  Container,
  StyledFormError,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  ResponseMessage
} from "../common-styled-components/common";
// Import components
import BackToLanding from "../back-to-landing/BackToLanding";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
// Import interfaces
import { FormState } from "../../hooks/interfaces";
// Initial state for ForgotPassword component
const initialState: FormState = {
  email: ""
};

const ForgotPassword: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<any>();
  const [dbError, setDBerror] = useState<string>("");
  // Serves as callback for the custom hook
  const submitForgotPw = async () => {
    const { email } = values;
    const url = "http://localhost:8000/api/v1.0/users/forgot-password";

    try {
      const res = await axios.post(url, { email });
      setResponse(res);
      setDBerror("");
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
  } = useFormValidation(initialState, validateForm, submitForgotPw);
  // Helps with styling input elements (prop).
  const checkForError: boolean =
    (errors.email ? true : false) || dbError.length !== 0;

  return (
    <Container>
      <BackToLanding page="/login" />
      <Logo />
      {response ? (
        <ResponseMessage>{response.data.message}</ResponseMessage>
      ) : (
        <StyledForm recover noValidate onSubmit={handleSumbit}>
          <StyledLabel>Enter your email address</StyledLabel>
          <StyledInput
            styleError={checkForError}
            name="email"
            type="text"
            value={values.email}
            placeholder="example@mail.com"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors && <StyledFormError>{errors.email}</StyledFormError>}
          {dbError && <StyledFormError>{dbError}</StyledFormError>}
          <StyledButton disabled={isSubmitting} formButton type="submit">
            Submit
          </StyledButton>
        </StyledForm>
      )}
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
