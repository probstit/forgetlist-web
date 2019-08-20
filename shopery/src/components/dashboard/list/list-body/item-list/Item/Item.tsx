import React, { useContext } from "react";
import axios from "axios";
// Styled Components
import {
  FloatedContent,
  NameWrapper,
  QtyWrapper
} from "../../list-body-styles";
import { StyledItem, ItemOptions } from "./item-styles";
// Import FA Icon
import Icon from "../../../../icon/Icon";
// Interfaces
import { Item as ItemDetails } from "../../../../../../reducers/itemsReducer";
// Contexts
import {
  ListContext,
  ItemListContext
} from "../../../../../../contexts/listContext";

interface ItemProp {
  item: ItemDetails;
  key: string;
}

const deleteFromDB = async (id: string) => {
  let token = localStorage.getItem("token");
  if (token) token = JSON.parse(token);
  const url = `http://localhost:8000/api/v1.0/items/delete-item/${id}`;
  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (err) {
    console.log(err); // For now
  }
};

const Item: React.FC<ItemProp> = ({ item }) => {
  const { dispatch } = useContext<ItemListContext>(ListContext);

  const deleteItem = () => {
    if (dispatch) {
      dispatch({
        type: "DELETE_ITEM",
        item: {
          _id: item._id
        }
      });

      deleteFromDB(item._id);
    }
  };

  return (
    <StyledItem>
      <FloatedContent>
        <NameWrapper>{item.name}</NameWrapper>
        <QtyWrapper>{item.quantity}</QtyWrapper>
      </FloatedContent>
      <ItemOptions>
        {item.isShared ? (
          <Icon liOption icon="lock-open" />
        ) : (
          <Icon liOption icon="lock" />
        )}

        <Icon liOption icon="share" />
        <Icon onClick={deleteItem} trash liOption icon="trash-alt" />
        <Icon liOption icon="caret-up" />
      </ItemOptions>
    </StyledItem>
  );
};

export default Item;
