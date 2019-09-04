import React from "react";
import { User } from "../../../../../../hooks/get-user/interfaces";

// Styled Components
import { SharedWithContainer, Title, Users } from "./shared-with-styles";
// Components
import SharedWithUser from "./shared-with-user/SharedWithUser";
import { NoItems } from "../../list-body-styles";

interface SharedWithProps {
  usersData: User[];
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>;
  itemID: string;
  hideFromUserData: Function;
}

const SharedWith: React.FC<SharedWithProps> = ({
  usersData,
  setUsersData,
  itemID,
  hideFromUserData
}) => {
  return (
    <SharedWithContainer>
      <Title>Shared With</Title>
      {usersData.length > 0 ? (
        <Users>
          {usersData.map(user => (
            <SharedWithUser
              key={user._id}
              user={user}
              setUsersData={setUsersData}
              itemID={itemID}
              hideFromUserData={hideFromUserData}
            />
          ))}
        </Users>
      ) : (
        <NoItems shared>This item is not being shared with anyone.</NoItems>
      )}
    </SharedWithContainer>
  );
};

export default SharedWith;
