import React from "react";
import { RouteComponentProps } from "react-router";
// Components
import Dashboard from "../dashboard/Dashboard";
// Context
import EditContextProvider from "../../contexts/editContext";
import ListContextProvider from "../../contexts/listContext";

const DashboardWContext: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <EditContextProvider>
      <ListContextProvider>
        <Dashboard history={history} />
      </ListContextProvider>
    </EditContextProvider>
  );
};

export default DashboardWContext;
