import React from "react";
// Styled Components
import { IconWrapper, UserContainer } from "./shared-with-user-styles";
// Components
import Avatar from "../../../../../../avatar/Avatar";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces
import { User } from "../../../../../../../hooks/get-user/interfaces";

interface SharedWithUserProps {
  user: User;
}

const SharedWithUser: React.FC<SharedWithUserProps> = ({ user }) => {
  return (
    <UserContainer>
      <Avatar shared user={user} />
      <IconWrapper>
        <FontAwesomeIcon icon="ban" />
      </IconWrapper>
    </UserContainer>
  );
};

export default SharedWithUser;
