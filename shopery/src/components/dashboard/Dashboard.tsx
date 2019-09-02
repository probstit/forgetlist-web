import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
// Import styled components
import { DashboardWrapper } from "./dashboard-styles";
import { Container } from "../common-styled-components/common";
// Import components
import AppNav from "../app-nav/AppNav";
import AppHeader from "../app-header/AppHeader";
import List from "./list/List";
import Edit from "./edit-item/Edit";
import SharedItems from "./shared-items/SharedItems";

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
          <AppHeader />
          <DashboardWrapper>
            <List />
            <SharedItems />
          </DashboardWrapper>
          <AppNav />
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default Dashboard;
