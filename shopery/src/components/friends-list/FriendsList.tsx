import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
// Components
import AppHeader from "../app-header/AppHeader";
import AppNav from "../app-nav/AppNav";
import List from "./list/List";
import AddFriend from "./add-friend/AddFriend";
// Styled Components
import { Container, Wrapper } from "../common-styled-components/common";
import { ListWrapper } from "../dashboard/list/list-styles";
import { FriendsListHead, FriendsIconWrapper } from "./friends-list-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Context
import { Auth, AuthContext } from "../../contexts/authContext";

const FriendsList: React.FC = () => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);

  const toggleAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          {showAddFriend && <AddFriend setShowAddFriend={setShowAddFriend} />}
          <AppHeader />
          <Wrapper>
            <ListWrapper>
              <FriendsListHead>
                <FriendsIconWrapper onClick={toggleAddFriend}>
                  <FontAwesomeIcon icon="user-plus" />
                </FriendsIconWrapper>
                <h4>Friends</h4>
              </FriendsListHead>
              <List />
            </ListWrapper>
          </Wrapper>
          <AppNav />
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default FriendsList;
