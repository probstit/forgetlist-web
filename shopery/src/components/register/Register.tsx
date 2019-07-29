import React, { useState } from "react";

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

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-']+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

const Register: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <BackToLanding />
      <Logo />
      <FormContainer>
        <h2>Register</h2>
        <hr />
        <StyledForm onSubmit={handleSubmit}>
          First Name
          <br />
          <StyledInput
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Ex. John"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            required
          />
          <br />
          Last Name
          <br />
          <StyledInput
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Ex. Doe"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            required
          />
          <br />
          E-mail
          <br />
          <StyledInput
            type="email"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
          <br />
          Password
          <br />
          <StyledInput
            type="password"
            name="password"
            value={password}
            placeholder="********"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
          <StyledButton type="submit">Create Account</StyledButton>
        </StyledForm>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Register;
