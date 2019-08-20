import React, {
  createContext,
  useEffect,
  useReducer,
  Dispatch,
  SetStateAction
} from "react";
import axios from "axios";
// Reducers
import { itemsReducer, Item } from "../reducers/itemsReducer";

export interface Action {
  type: string;
  item: {
    _id?: string;
    name?: string;
    quantity?: number;
    isBought?: boolean;
    isShared?: boolean;
  };
}

export interface ItemListContext {
  items?: Item[];
  dispatch?: Dispatch<SetStateAction<Action>>;
}

export const ListContext = createContext<ItemListContext>({});

const fetchItems = async (): Promise<Item[]> => {
  const url = "http://localhost:8000/api/v1.0/items/get-items";
  let token = localStorage.getItem("token");
  if (token) token = JSON.parse(token);
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data.items;
};

const ListContextProvider: React.FC = props => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  useEffect(() => {
    fetchItems()
      .then(items => {
        dispatch({ type: "SET_INITIAL", items });
      })
      .catch(err => console.log(err)); //FOR NOW
  }, []);

  return (
    <ListContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
