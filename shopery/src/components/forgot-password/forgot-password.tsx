import React, { useState, useEffect, useCallback } from "react";

import { Container, StyledFormError } from "../common-styled-components/common";
import BackToLanding from "../back-to-landing/BackToLanding";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton
} from "./forgot-password-styles";
import { FormEvent, ChangeEvent } from "../../hooks/interfaces";
import axios from "axios";

function validate(email: string) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  let error: string = "";

  if (!email) {
    error = "Email is required";
  } else if (!emailRegex.test(email)) {
    error = "Invalid Email";
  }

  return error;
}

const ForgotPassword: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitForgotPw = useCallback(async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1.0/users/forgot-password`,
        { email }
      );
      console.log(response);
    } catch (err) {
      console.error(err.response.data.payload.message);
    }
  }, [email]);

  useEffect(() => {
    if (isSubmitting) {
      const noError = error.length === 0;

      if (noError) {
        submitForgotPw();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [error, email, isSubmitting, submitForgotPw]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const validationError = validate(email);
    setError(validationError);
    setIsSubmitting(true);
  };

  const handleChange = (e: ChangeEvent): void => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleBlur = (): void => {
    const validationError = validate(email);
    setError(validationError);
  };

  return (
    <Container>
      <BackToLanding page="/login" />
      <Logo />
      <StyledForm noValidate onSubmit={handleSubmit}>
        <StyledLabel>Enter your email address</StyledLabel>
        <StyledInput
          name="email"
          type="text"
          value={email}
          placeholder="example@mail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && "inputError"}
        />
        {error && <StyledFormError>{error}</StyledFormError>}
        <StyledButton disabled={isSubmitting} type="submit">
          Submit
        </StyledButton>
      </StyledForm>
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
