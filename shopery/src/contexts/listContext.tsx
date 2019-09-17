import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  MouseEventHandler
} from "react";
import axios from "axios";
// Reducers
import { itemsReducer, Item } from "../reducers/itemsReducer";
// Util
import grabToken from "../util/grab-token";
import { interceptResponse } from "../util/response-interceptor";
// Fetch friends
import { getFriendIDs } from "../contexts/friends-context/friends-context-utils";
// Context
import { AuthContext, Auth } from "../contexts/authContext";

export interface Action {
  type: string;
  item?: {
    _id?: string;
    name?: string;
    quantity?: number;
    isBought?: boolean;
    isShared?: boolean;
    sharedWith?: string[];
  };
}

export interface ItemListContext {
  items?: Item[];
  dispatch?: Dispatch<SetStateAction<Action>>;
  setIsShared?: Dispatch<SetStateAction<boolean>>;
  isShared?: boolean;
  toggleShareStatus?: MouseEventHandler;
}

export const ListContext = createContext<ItemListContext>({});

const ListContextProvider: React.FC = props => {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [isShared, setIsShared] = useState<boolean>();
  const [userFriends, setUserFriends] = useState<string[]>([]);
  const { setLoggedIn } = useContext<Auth>(AuthContext);

  // Updates items share status in the DB.
  const updateShareStatus = async (url: string) => {
    let token = grabToken();
    if (setLoggedIn) interceptResponse(setLoggedIn);
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  };

  const toggleShareStatus = () => {
    if (isShared) {
      updateShareStatus("http://localhost:8000/api/v1.0/items/hide-list");
      if (dispatch) dispatch({ type: "HIDE_LIST" });
    } else {
      updateShareStatus("http://localhost:8000/api/v1.0/items/share-list").then(
        response => setUserFriends(response.data.userFriends)
      );
      if (dispatch)
        dispatch({ type: "SHARE_LIST", item: { sharedWith: userFriends } });
    }

    setIsShared(!isShared);
  };

  useEffect(() => {
    // For setting the initial list state.
    const fetchItems = async (): Promise<Item[] | void> => {
      const url = "http://localhost:8000/api/v1.0/items/get-items";
      const token = grabToken();
      if (setLoggedIn) interceptResponse(setLoggedIn);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response) return response.data.items;
    };

    fetchItems()
      .then(items => {
        dispatch({ type: "SET_INITIAL", items });
      })
      .catch(err => console.log(err)); //FOR NOW
  }, [setLoggedIn]);

  useEffect(() => {
    let shared = false;
    items.forEach(item => {
      if (item.isShared) {
        shared = true;
      }
    });
    setIsShared(shared);
  }, [items]);

  useEffect(() => {
    if (setLoggedIn)
      getFriendIDs(
        "http://localhost:8000/api/v1.0/social/friends",
        setLoggedIn
      ).then(response => {
        if (response) setUserFriends(response.friendList.friendIDs);
      });
  }, [setLoggedIn]);

  return (
    <ListContext.Provider
      value={{ items, dispatch, isShared, toggleShareStatus }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
