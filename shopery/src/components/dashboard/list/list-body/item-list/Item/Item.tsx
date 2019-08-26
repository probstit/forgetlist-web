import React, { useContext } from "react";
import axios from "axios";
// Styled Components
import { NameWrapper, QtyWrapper } from "../../list-body-styles";
import { StyledItem, ItemDetails, ItemOptions } from "./item-styles";
// Import FA Icon
import Icon from "../../../../../icon/Icon";
import { IconWrapper } from "../../../../../icon/icon-styles";
// Interfaces
import { Item as ItemData } from "../../../../../../reducers/itemsReducer";
// Contexts
import {
  ListContext,
  ItemListContext
} from "../../../../../../contexts/listContext";
import {
  EditContext,
  ItemEditContext
} from "../../../../../../contexts/editContext";

// Util
import grabToken from "../../../../../../util/grab-token";

interface ItemProp {
  item: ItemData;
  key: string;
  displayOptions: boolean;
  historyItem: boolean;
}

const deleteFromDB = async (id: string) => {
  let token = grabToken();
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

const updateItemBoughtStatus = async (url: string) => {
  let token = grabToken();
  axios.put(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

const updateItemShareStatus = async (url: string) => {
  let token = grabToken();
  try {
    await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (err) {
    alert(err.response.data.payload.message);
  }
};

const Item: React.FC<ItemProp> = ({ item, displayOptions, historyItem }) => {
  const { dispatch } = useContext<ItemListContext>(ListContext);
  const { showEdit, setItemData } = useContext<ItemEditContext>(EditContext);

  // Click handler for edit.
  const handleEdit = () => {
    if (showEdit) showEdit();
    if (setItemData) setItemData(item);
  };

  // Mark item as bought.
  const buyItem = () => {
    if (dispatch) {
      // Same action type as deleting because the result is the same.
      if (dispatch) {
        dispatch({
          type: "DELETE_ITEM",
          item: {
            _id: item._id
          }
        });
      }
    }

    updateItemBoughtStatus(
      `http://localhost:8000/api/v1.0/items/mark-bought/${item._id}`
    );
  };

  // Deletes an item from item state also updates the DB.
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
  // Updates an item shared status in the state also in the DB.
  const shareItem = () => {
    if (item.isShared) {
      updateItemShareStatus(
        `http://localhost:8000/api/v1.0/items/hide-item/${item._id}`
      );
      if (dispatch) dispatch({ type: "HIDE_ITEM", item: { _id: item._id } });
    } else {
      updateItemShareStatus(
        `http://localhost:8000/api/v1.0/items/share-with-all/${item._id}`
      );
      if (dispatch) dispatch({ type: "SHARE_ITEM", item: { _id: item._id } });
    }
  };

  return (
    <StyledItem>
      <ItemDetails onClick={buyItem} historyList={historyItem}>
        <NameWrapper>{item.name}</NameWrapper>
        <QtyWrapper itemQty>{item.quantity}</QtyWrapper>
      </ItemDetails>
      {displayOptions && (
        <ItemOptions>
          {item.isShared ? (
            <IconWrapper liOption onClick={shareItem}>
              <Icon liOption icon="lock-open" />
            </IconWrapper>
          ) : (
            <IconWrapper liOption onClick={shareItem}>
              <Icon liOption icon="lock" />
            </IconWrapper>
          )}
          <IconWrapper liOption onClick={handleEdit}>
            <Icon liOption icon="edit" />
          </IconWrapper>
          <IconWrapper liOption onClick={deleteItem}>
            <Icon trash liOption icon="trash-alt" />
          </IconWrapper>
          <IconWrapper liOption>
            <Icon liOption icon="caret-up" />
          </IconWrapper>
        </ItemOptions>
      )}
    </StyledItem>
  );
};

export default Item;
