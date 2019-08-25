import React, { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
// Import styled components
import {
  InputWrapper,
  ListItemInput,
  ListItemLabel,
  AddButton
} from "./add-item-form-styles";
import { StyledForm } from "../../../../common-styled-components/common";
// Context
import {
  ListContext,
  ItemListContext
} from "../../../../../contexts/listContext";
import { Item } from "../../../../../reducers/itemsReducer";
// Util
import grabToken from "../../../../../util/grab-token";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Sends item info to DB.
const sendItem = async (item: Item): Promise<Item> => {
  let token = grabToken();
  const url = "http://localhost:8000/api/v1.0/items/add-item";
  const response = await axios.post(url, item, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data.addedItem;
};

const initialState: Item = {
  name: "",
  quantity: 0,
  isShared: false,
  isBought: false,
  _id: ""
};

interface AddItemFormProps {
  setShowAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddItemForm: React.FC<AddItemFormProps> = ({
  setShowAdd
}): JSX.Element => {
  const { dispatch } = useContext<ItemListContext>(ListContext);
  const [item, setItem] = useState<Item>(initialState);
  const [checked, setChecked] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const detectOutsideClick = (e: any) => {
      e.stopPropagation();
      if (formRef.current && !formRef.current.contains(e.target))
        setShowAdd(false);
    };
    window.addEventListener("click", detectOutsideClick, false);
    return () => window.removeEventListener("click", detectOutsideClick, false);
  }, [setShowAdd]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "isShared") {
      setChecked(!checked);
    }

    const checkValue = () => {
      if (value === "true") {
        return true;
      } else if (value === "false") {
        return false;
      } else {
        return value;
      }
    };

    setItem({
      ...item,
      [name]: checkValue()
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the item.
    const { _id, name, quantity, isShared, isBought } = await sendItem(item);

    // Dispatch action to update state.
    if (dispatch) {
      dispatch({
        type: "ADD_ITEM",
        item: {
          _id,
          name,
          quantity,
          isShared,
          isBought
        }
      });
      if (nameInputRef.current) nameInputRef.current.focus();
    }

    // Reset form values.
    setItem({
      _id: "",
      name: "",
      quantity: 0,
      isShared: false,
      isBought: false
    });
  };

  return (
    <StyledForm ref={formRef} listHeader onSubmit={handleSubmit}>
      <InputWrapper itemName>
        <ListItemLabel itemName>Item Name</ListItemLabel>
        <ListItemInput
          itemName
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper itemQty>
        <ListItemLabel>Qty</ListItemLabel>
        <ListItemInput
          type="number"
          placeholder="0"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper setShare>
        <ListItemLabel setShare htmlFor="isShared">
          {checked ? (
            <FontAwesomeIcon icon="lock-open" />
          ) : (
            <FontAwesomeIcon icon="lock" />
          )}
        </ListItemLabel>
        <ListItemInput
          type="checkbox"
          name="isShared"
          checked={checked}
          value={`${!checked}`}
          onChange={handleChange}
        />
      </InputWrapper>

      <AddButton type="submit">Add</AddButton>
    </StyledForm>
  );
};

export default AddItemForm;
