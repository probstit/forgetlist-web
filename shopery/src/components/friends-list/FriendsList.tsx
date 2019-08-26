import React, { useContext, useState, useEffect } from "react";
import { RouteComponentProps, Redirect } from "react-router";
import axios from "axios";
import grabToken from "../../util/grab-token";
// Components
import AppHeader from "../app-header/AppHeader";
import AppNav from "../app-nav/AppNav";
// Styled Components
import { Container, Wrapper } from "../common-styled-components/common";
import { ListWrapper } from "../dashboard/list/list-styles";
import { FriendsListHead, FriendsIconWrapper } from "./friends-list-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Context
import { Auth, AuthContext } from "../../contexts/authContext";

interface IfriendsID {
  _id: string;
}

async function getFriendsData(url: string) {
  const token = grabToken();
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const FriendsList: React.FC<RouteComponentProps> = ({ history }) => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [friendsID, setFriendsID] = useState<IfriendsID[]>([]);
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    getFriendsData("http://localhost:8000/api/v1.0/social/friends").then(
      response => {
        setFriendsID(response.friendList.friendIDs);
      }
    );
  }, []);

  useEffect(() => {
    const friendsData: any = [];
    friendsID.forEach(id => {
      getFriendsData(`http://localhost:8000/api/v1.0/users/user/${id}`).then(
        user => friendsData.push(user)
      );

      setFriendsData(friendsData);
    });
  }, [friendsID]);

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          <AppHeader />
          <Wrapper>
            <ListWrapper>
              <FriendsListHead>
                <FriendsIconWrapper>
                  <FontAwesomeIcon icon="user-plus" />
                </FriendsIconWrapper>
                <h4>Friends</h4>
              </FriendsListHead>
            </ListWrapper>
          </Wrapper>
          <AppNav history={history} />
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default FriendsList;
