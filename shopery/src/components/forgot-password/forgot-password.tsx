import React, { useState } from "react";
import axios from "axios";

import { Container, StyledFormError } from "../common-styled-components/common";
import BackToLanding from "../back-to-landing/BackToLanding";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

import { useFormValidation } from "../../hooks/useFormValidation";
import validateForm from "../../hooks/validateForm";

import { FormState } from "../../hooks/interfaces";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledP
} from "./forgot-password-styles";

const initialState: FormState = {
  email: ""
};

const ForgotPassword: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<any>();
  const [dbError, setDBerror] = useState<string>("");

  const submitForgotPw = async () => {
    const { email } = values;
    const url = "http://localhost:8000/api/v1.0/users/forgot-password";

    try {
      const res = await axios.post(url, { email });
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
  } = useFormValidation(initialState, validateForm, submitForgotPw);

  return (
    <Container>
      <BackToLanding page="/login" />
      <Logo />
      {response ? (
        <StyledP>{response.data.message}</StyledP>
      ) : (
        <StyledForm noValidate onSubmit={handleSumbit}>
          <StyledLabel>Enter your email address</StyledLabel>
          <StyledInput
            name="email"
            type="text"
            value={values.email}
            placeholder="example@mail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && "inputError"}
          />
          {errors && <StyledFormError>{errors.email}</StyledFormError>}
          {dbError && <StyledFormError>{dbError}</StyledFormError>}
          <StyledButton disabled={isSubmitting} type="submit">
            Submit
          </StyledButton>
        </StyledForm>
      )}
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
