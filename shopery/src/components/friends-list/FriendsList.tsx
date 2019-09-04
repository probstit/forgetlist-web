import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import grabToken from "../../util/grab-token";
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

export interface IfriendsID {
  _id: string;
}

export interface IfriendsData {
  email: string;
  firstName: string;
  lastName: string;
  _id: string;
}

export async function getFriendsData(url: string) {
  const token = grabToken();
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (err) {
    console.log(err.response.data.payload.message);
  }
}

const FriendsList: React.FC = () => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [friendsID, setFriendsID] = useState<IfriendsID[]>([]);
  const [friendsData, setFriendsData] = useState<IfriendsData[]>([]);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);

  const toggleAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  useEffect(() => {
    getFriendsData("http://localhost:8000/api/v1.0/social/friends")
      .then(response => {
        if (isLoggedIn) setFriendsID(response.friendList.friendIDs);
      })
      .catch(err => alert(err.response.data.payload.message));
  }, [isLoggedIn]);

  useEffect(() => {
    const getFriendsAll = async () => {
      const friends = await Promise.all(
        friendsID.map(async id => {
          const result = await getFriendsData(
            `http://localhost:8000/api/v1.0/users/user/${id}`
          );
          return result;
        })
      );

      setFriendsData(friends);
    };

    getFriendsAll();
  }, [friendsID]);

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
              <List friendsData={friendsData} setFriendsData={setFriendsData} />
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
