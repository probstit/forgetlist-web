import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext
} from "react";
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
import { AuthContext, Auth } from "../authContext";

export interface IFriendsContext {
  friends?: UserFriend[];
  removeFriend?: Function;
  addFriend?: Function;
}

export const FriendsContext = createContext<IFriendsContext>({});

export const FriendsContextProvider: React.FC = props => {
  const [friends, dispatch] = useReducer(friendsReducer, []);
  const [friendsID, setFriendsID] = useState<IfriendsID[]>([]);
  const { setLoggedIn } = useContext<Auth>(AuthContext);

  useEffect(() => {
    if (setLoggedIn)
      getFriendIDs(
        "http://localhost:8000/api/v1.0/social/friends",
        setLoggedIn
      ).then(response => {
        if (response) setFriendsID(response.friendList.friendIDs);
      });
  }, [setLoggedIn]);

  useEffect(() => {
    if (setLoggedIn)
      getFriendsData(friendsID, setLoggedIn).then(friends => {
        dispatch({ type: "SET_INITIAL", friends });
      });
  }, [friendsID, setLoggedIn]);

  // Handlers
  const removeFriend = (id: string) => {
    dispatch({ type: "DELETE_FRIEND", friend: { _id: id } });
    if (setLoggedIn) removeFriendFromDB(id, setLoggedIn);
  };

  const addFriend = (friend: UserFriend) => {
    dispatch({ type: "ADD_FRIEND", friend });
    if (setLoggedIn) addFriendInDB(friend.email, setLoggedIn);
  };

  return (
    <FriendsContext.Provider value={{ friends, removeFriend, addFriend }}>
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
