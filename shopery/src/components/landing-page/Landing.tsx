import React from "react";
import {
  LandingContainer,
  Header,
  ButtonsContainer,
  LoginButton,
  RegisterButton,
  Footer
} from "./landing-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage: React.FC = (): JSX.Element => (
  <LandingContainer>
    <Header>
      <h1>
        Shopery <FontAwesomeIcon icon="shopping-basket" />
      </h1>
      <h4>
        <span>Team up</span> with your friends for a better shopping experience.
      </h4>
    </Header>

    <ButtonsContainer>
      <LoginButton>Login</LoginButton>
      <p>OR</p>
      <RegisterButton>Create a new account</RegisterButton>
    </ButtonsContainer>

    <Footer>
      <p>Copyright &copy; Shopery 2019</p>
    </Footer>
  </LandingContainer>
);

export default LandingPage;
