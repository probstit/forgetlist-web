import React from "react";
// Import styled components
import {
  StyledListHeader,
  UserDetails,
  StyledUserAvatar,
  StyledUserName,
  ListOptionsWrapper
} from "./list-header-styles";
// Import components
import Icon from "../../icon/Icon";

const ListHeader: React.FC = (): JSX.Element => {
  return (
    <StyledListHeader>
      <UserDetails>
        <StyledUserAvatar>
          <p>U</p>
        </StyledUserAvatar>
        <StyledUserName>User Name</StyledUserName>
      </UserDetails>
      <ListOptionsWrapper>
        <Icon icon="plus" />
        <Icon icon="lock" />
        <Icon icon="share-square" />
      </ListOptionsWrapper>
    </StyledListHeader>
  );
};

export default ListHeader;
