import React, { useContext, useRef, useEffect } from "react";
import axios from "axios";
// Context
import { EditContext, ItemEditContext } from "../../../contexts/editContext";
import { ListContext, ItemListContext } from "../../../contexts/listContext";
// Util
import grabToken from "../../../util/grab-token";
import { Item } from "../../../reducers/itemsReducer";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styled components
import {
  EditContainer,
  EditForm,
  EditHeader,
  EditBody,
  EditInputWrapper,
  EditLabel,
  EditInput,
  EditButton
} from "./edit-styles";

// Updated item data in db.
function updateItemDB(itemID: string, itemData: Item) {
  const token = grabToken();
  const url = `http://localhost:8000/api/v1.0/items/edit-item/${itemID}`;
  axios.put(
    url,
    { itemData },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

const Edit: React.FC = () => {
  const { hideEdit, itemData, setItemData } = useContext<ItemEditContext>(
    EditContext
  );
  const { dispatch } = useContext<ItemListContext>(ListContext);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const hideEditHandler = () => {
    if (hideEdit) hideEdit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const checkValue = () => {
      if (value === "true") {
        return true;
      } else if (value === "false") {
        return false;
      } else {
        return value;
      }
    };

    if (setItemData) {
      setItemData({
        ...itemData,
        [name]: checkValue()
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemData) updateItemDB(itemData._id, itemData);
    if (dispatch && itemData) {
      dispatch({
        type: "EDIT_ITEM",
        item: {
          ...itemData
        }
      });
    }
    if (hideEdit) hideEdit();
  };

  useEffect(() => {
    if (nameInputRef.current) nameInputRef.current.focus();
  }, []);

  return (
    <EditContainer>
      <EditForm onSubmit={handleSubmit}>
        <EditHeader>
          <div onClick={hideEditHandler}>
            <FontAwesomeIcon icon="times" />
          </div>
        </EditHeader>
        <EditBody>
          <EditInputWrapper itemName>
            <EditLabel itemName>Item name</EditLabel>
            <EditInput
              type="text"
              name="name"
              placeholder="Name"
              ref={nameInputRef}
              value={itemData && itemData.name}
              onChange={handleChange}
            />
          </EditInputWrapper>
          <EditInputWrapper itemQty>
            <EditLabel>Qty</EditLabel>
            <EditInput
              itemQty
              type="number"
              name="quantity"
              placeholder="0"
              value={itemData && itemData.quantity}
              onChange={handleChange}
            />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel setShare htmlFor="isShared">
              {itemData && itemData.isShared ? (
                <FontAwesomeIcon icon="lock-open" />
              ) : (
                <FontAwesomeIcon icon="lock" />
              )}
            </EditLabel>
            <EditInput
              setShare
              type="checkbox"
              name="isShared"
              checked={itemData && itemData.isShared}
              value={`${itemData && !itemData.isShared}`}
              onChange={handleChange}
            />
          </EditInputWrapper>
          <EditButton type="submit">Save</EditButton>
        </EditBody>
      </EditForm>
    </EditContainer>
  );
};

export default Edit;
