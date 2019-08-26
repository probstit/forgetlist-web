import React, { useContext, useEffect, useState } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import grabToken from "../../util/grab-token";
// Components
import AppHeader from "../app-header/AppHeader";
import AppNav from "../app-nav/AppNav";
import ItemList from "../dashboard/list/list-body/item-list/ItemList";
// Styled Components
import { Container, Wrapper } from "../common-styled-components/common";
import { ListWrapper } from "../dashboard/list/list-styles";
import {
  ListBodyWrapper,
  FloatedContent,
  NameWrapper,
  QtyWrapper,
  ListBodyHeader
} from "../dashboard/list/list-body/list-body-styles";
import { HistoryListHeader } from "./history-styles";
// Import Context
import { AuthContext, Auth } from "../../contexts/authContext";
import { Item } from "../../reducers/itemsReducer";

const fetchHistoryItems = async (url: string): Promise<Item[]> => {
  const token = grabToken();
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const historyItems = response.data.items;
  return historyItems;
};

const History: React.FC<RouteComponentProps> = ({ history }) => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchHistoryItems("http://localhost:8000/api/v1.0/items/get-history").then(
      historyItems => {
        setItems(historyItems);
      }
    );
  }, []);

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          <AppHeader />
          <Wrapper>
            <ListWrapper>
              <HistoryListHeader>
                <h3>History</h3>
              </HistoryListHeader>
              <ListBodyWrapper historyList>
                <ListBodyHeader>
                  <FloatedContent historyList>
                    <NameWrapper historyList>Name</NameWrapper>
                    <QtyWrapper historyList>Qty</QtyWrapper>
                  </FloatedContent>
                </ListBodyHeader>
                <ItemList
                  items={items}
                  displayOptions={false}
                  historyItem={true}
                />
              </ListBodyWrapper>
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

export default History;
