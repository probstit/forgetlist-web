import React from "react";
// Import styled components
import { ListWrapper } from "../list/list-styles";
import ListHeader from "./list-header/ListHeader";

const List: React.FC = (): JSX.Element => {
  return (
    <ListWrapper>
      <ListHeader />
    </ListWrapper>
  );
};

export default List;
