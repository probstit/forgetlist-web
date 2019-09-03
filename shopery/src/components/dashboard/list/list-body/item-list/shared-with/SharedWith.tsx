import React from "react";

// Styled Components
import { SharedWithContainer, Title, Users } from "./shared-with-styles";
// Components
import SharedWithUser from "./shared-with-user/SharedWithUser";

interface SharedWithProps {
  userIDs: string[] | undefined;
}

const SharedWith: React.FC<SharedWithProps> = ({ userIDs }) => {
  return (
    <SharedWithContainer>
      <Title>Shared With</Title>
      <Users>
        {userIDs && userIDs.map(id => <SharedWithUser key={id} userID={id} />)}
      </Users>
    </SharedWithContainer>
  );
};

export default SharedWith;
