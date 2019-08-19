import React, { useState, useEffect } from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";
// Import styled components
import { ListWrapper } from "../list/list-styles";
// Import components
import ListHeader from "./list-header/ListHeader";
import ListBody from "./list-body/ListBody";
// Hooks
import useGetUser from "../../../hooks/get-user/useGetUser";

export interface ListItem {
  name: string;
  quantity: number;
  isBought: boolean;
  isShared: boolean;
  _id: string;
}

const fetchItems = async (): Promise<ListItem[]> => {
  const url = "http://localhost:8000/api/v1.0/items/get-items";
  let token = localStorage.getItem("token");
  if (token) token = JSON.parse(token);
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(response.data.items);

  return response.data.items;
};

const List: React.FC = (): JSX.Element => {
  const { user, error } = useGetUser();
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    fetchItems()
      .then(items => setItems(items))
      .catch(err => console.log(err));
  }, []);

  return (
    <ListWrapper>
      {error ? (
        <Redirect to="/landing" />
      ) : (
        <>
          <ListHeader user={user} setItems={setItems} items={items} />
          <ListBody items={items} />
        </>
      )}
    </ListWrapper>
  );
};

export default List;
