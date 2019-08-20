import React, { useContext } from "react";
// Styled Components
import {
  ListBodyWrapper,
  ListBodyHeader,
  FloatedContent,
  NameWrapper,
  QtyWrapper,
  NoItems
} from "./list-body-styles";
// Components
import ItemList from "./item-list/ItemList";
// Context
import { ListContext, ItemListContext } from "../../../../contexts/listContext";

const ListBody: React.FC = (): JSX.Element => {
  const { items } = useContext<ItemListContext>(ListContext);
  return (
    <ListBodyWrapper>
      {items && items.length > 0 ? (
        <>
          <ListBodyHeader>
            <FloatedContent>
              <NameWrapper>Name</NameWrapper>
              <QtyWrapper>Qty</QtyWrapper>
            </FloatedContent>
          </ListBodyHeader>
          <ItemList />
        </>
      ) : (
        <NoItems>No items added yet.</NoItems>
      )}
    </ListBodyWrapper>
  );
};

export default ListBody;
