import React from "react";

import { Redirect } from "react-router-dom";
// Import styled components
import { ListWrapper } from "../list/list-styles";
// Import components
import ListHeader from "./list-header/ListHeader";
import ListBody from "./list-body/ListBody";
// Hooks
import useGetUser from "../../../hooks/get-user/useGetUser";

const List: React.FC = (): JSX.Element => {
  const { user, error } = useGetUser();

  return (
    <ListWrapper>
      {error ? (
        <Redirect to="/landing" />
      ) : (
        <>
          <ListHeader user={user} />
          <ListBody />
        </>
      )}
    </ListWrapper>
  );
};

export default List;
