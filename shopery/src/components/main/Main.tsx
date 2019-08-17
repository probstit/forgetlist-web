import React, { useContext } from "react";
// Import styled components
import { Container } from "../common-styled-components/common";
// Prop types
import { RouteComponentProps } from "react-router-dom";
// Import Context
import { AuthContext, Auth } from "../../contexts/authContext";
import { Redirect } from "react-router-dom";

const Main: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);

  return (
    <Container>
      {isLoggedIn ? <h1>Main</h1> : <Redirect to="/landing" />}
    </Container>
  );
};

export default Main;
