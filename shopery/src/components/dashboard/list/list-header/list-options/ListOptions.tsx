import React, { MouseEventHandler } from "react";
// Styled components
import { ListOptionsWrapper, IconWrapper } from "./list-options-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ListOptionsProps {
  toggleShowAdd: MouseEventHandler;
}

const ListOptions: React.FC<ListOptionsProps> = ({
  toggleShowAdd
}): JSX.Element => {
  return (
    <ListOptionsWrapper>
      <IconWrapper onClick={toggleShowAdd}>
        <FontAwesomeIcon icon="plus" />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon="lock" />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon="share-square" />
      </IconWrapper>
    </ListOptionsWrapper>
  );
};

export default ListOptions;
