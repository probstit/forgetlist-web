import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import grabToken from "../../util/grab-token";
// Components
import AppHeader from "../app-header/AppHeader";
import AppNav from "../app-nav/AppNav";
import ItemList from "../dashboard/list/list-body/item-list/ItemList";
import Menu from "../menu/Menu";
// Styled Components
import { Container, Wrapper } from "../common-styled-components/common";
import { ListWrapper } from "../dashboard/list/list-styles";
import {
  ListBodyWrapper,
  FloatedContent,
  NameWrapper,
  QtyWrapper,
  ListBodyHeader,
  NoItems
} from "../dashboard/list/list-body/list-body-styles";
import { HistoryListHeader } from "./history-styles";
// Import Context
import { AuthContext, Auth } from "../../contexts/authContext";
import { Item } from "../../reducers/itemsReducer";
import { MenuContext, Menu_Context } from "../../contexts/menuContext";
import { interceptResponse, auth } from "../../util/response-interceptor";

const fetchHistoryItems = async (
  url: string,
  setLoggedIn: auth
): Promise<Item[] | void> => {
  const token = grabToken();
  interceptResponse(setLoggedIn);
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (response) return response.data.items;
};

const History: React.FC = () => {
  const { isLoggedIn, setLoggedIn } = useContext<Auth>(AuthContext);
  const { showMenu, toggleMenu } = useContext<Menu_Context>(MenuContext);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (setLoggedIn)
      fetchHistoryItems(
        "http://localhost:8000/api/v1.0/items/get-history",
        setLoggedIn
      ).then(historyItems => {
        if (historyItems) setItems(historyItems);
      });
  }, [setLoggedIn]);

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          <Menu visible={showMenu} toggleMenu={toggleMenu} />
          <AppHeader toggleMenu={toggleMenu} visible={showMenu} />
          <Wrapper>
            <ListWrapper>
              <HistoryListHeader>
                <h4>History</h4>
              </HistoryListHeader>
              <ListBodyWrapper historyList>
                {items.length > 0 ? (
                  <>
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
                  </>
                ) : (
                  <NoItems historyList>No items added yet.</NoItems>
                )}
              </ListBodyWrapper>
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

export default History;
