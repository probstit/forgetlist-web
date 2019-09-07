import React, { createContext, useState, useEffect, useReducer } from "react";
// Reducer
import { friendsReducer, UserFriend } from "../../reducers/friendsReducer";
// Helper functions
import {
  getFriendIDs,
  getFriendsData,
  removeFriendFromDB,
  addFriendInDB,
  IfriendsID
} from "./friends-context-utils";

export interface IFriendsContext {
  friends?: UserFriend[];
  removeFriend?: Function;
  addFriend?: Function;
}

export const FriendsContext = createContext<IFriendsContext>({});

export const FriendsContextProvider: React.FC = props => {
  const [friends, dispatch] = useReducer(friendsReducer, []);
  const [friendsID, setFriendsID] = useState<IfriendsID[]>([]);

  useEffect(() => {
    getFriendIDs("http://localhost:8000/api/v1.0/social/friends").then(
      response => {
        setFriendsID(response.friendList.friendIDs);
      }
    );
  }, []);

  useEffect(() => {
    getFriendsData(friendsID).then(friends => {
      dispatch({ type: "SET_INITIAL", friends });
    });
  }, [friendsID]);

  // Handlers
  const removeFriend = (id: string) => {
    dispatch({ type: "DELETE_FRIEND", friend: { _id: id } });
    removeFriendFromDB(id);
  };

  const addFriend = (friend: UserFriend) => {
    dispatch({ type: "ADD_FRIEND", friend });
    addFriendInDB(friend.email);
  };

  return (
    <FriendsContext.Provider value={{ friends, removeFriend, addFriend }}>
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
