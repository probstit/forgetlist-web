import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
// Import styled components
import {
  DashboardNav,
  DashboardWrapper,
  DashboardHeader
} from "./dashboard-styles";
import { Container } from "../common-styled-components/common";
// Import components
import Logo from "../logo/Logo";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import List from "./list/List";
import Icon from "./icon/Icon";
import Edit from "./edit-item/Edit";
// Import Context
import { AuthContext, Auth } from "../../contexts/authContext";
import { EditContext, ItemEditContext } from "../../contexts/editContext";

const Dashboard: React.FC = (): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const { displayEdit } = useContext<ItemEditContext>(EditContext);

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          {displayEdit && <Edit />}
          <DashboardHeader>
            <HamburgerMenu />
            <Logo />
          </DashboardHeader>
          <DashboardWrapper>
            <List />
          </DashboardWrapper>
          <DashboardNav>
            <Icon footer icon="user-friends" />
            <Icon footer icon="clipboard-list" />
            <Icon footer icon="history" />
          </DashboardNav>
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default Dashboard;
