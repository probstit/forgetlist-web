import React from "react";
import { Link } from "react-router-dom";
//Styled Components
import { AppNavContainer } from "./app-nav-styles";
import Icon from "../icon/Icon";

const AppNav: React.FC = () => {
  return (
    <AppNavContainer>
      <Link to="/friends">
        <Icon footer icon="user-friends" />
      </Link>
      <Link to="/">
        <Icon footer icon="clipboard-list" />
      </Link>
      <Link to="/history">
        <Icon footer icon="history" />
      </Link>
    </AppNavContainer>
  );
};

export default AppNav;
