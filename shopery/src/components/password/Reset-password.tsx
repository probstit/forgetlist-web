import React from "react";

import { Container } from "../common-styled-components/common";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

const ResetPassword: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <Footer />
    </Container>
  );
};

export default ResetPassword;
