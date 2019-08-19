import React from "react";
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
// Interface
import { ListItem } from "../List";

export interface ListItemProps {
  items: ListItem[];
}

const ListBody: React.FC<ListItemProps> = ({ items }): JSX.Element => {
  return (
    <ListBodyWrapper>
      {items.length > 0 ? (
        <>
          <ListBodyHeader>
            <FloatedContent>
              <NameWrapper>Name</NameWrapper>
              <QtyWrapper>Qty</QtyWrapper>
            </FloatedContent>
          </ListBodyHeader>
          <ItemList items={items} />
        </>
      ) : (
        <NoItems>No items added yet.</NoItems>
      )}
    </ListBodyWrapper>
  );
};

export default ListBody;
