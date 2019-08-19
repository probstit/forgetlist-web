import React, { useState } from "react";
import axios from "axios";
// Import styled components
import {
  InputWrapper,
  ListItemInput,
  ListItemLabel,
  AddButton
} from "./add-item-form-styles";
import { StyledForm } from "../../../../common-styled-components/common";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItem } from "../../List";

interface Item {
  name: string;
  quantity: number;
  isShared: boolean;
}

interface AddItemFormProps {
  setItems: React.Dispatch<React.SetStateAction<ListItem[]>>;
  items: ListItem[];
}

const sendItem = async (item: Item) => {
  let token = localStorage.getItem("token");
  if (token) token = JSON.parse(token);
  const url = "http://localhost:8000/api/v1.0/items/add-item";
  await axios.post(url, item, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const AddItemForm: React.FC<AddItemFormProps> = ({
  setItems,
  items
}): JSX.Element => {
  const [item, setItem] = useState<Item>({
    name: "",
    quantity: 0,
    isShared: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setItem({
      ...item,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendItem(item);
    setItems([
      ...items,
      {
        name: item.name,
        quantity: item.quantity,
        isBought: false,
        isShared: false,
        _id: ""
      }
    ]);
    setItem({
      name: "",
      quantity: 0,
      isShared: false
    });
  };

  return (
    <StyledForm listHeader onSubmit={handleSubmit}>
      <InputWrapper itemName>
        <ListItemLabel itemName>Item Name</ListItemLabel>
        <ListItemInput
          itemName
          type="text"
          placeholder="Name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <ListItemLabel>Qty</ListItemLabel>
        <ListItemInput
          type="number"
          placeholder="0"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper shareItem>
        <ListItemLabel shareItem>
          <FontAwesomeIcon icon="lock" />
        </ListItemLabel>
        <ListItemInput type="checkbox" />
      </InputWrapper>
      <AddButton type="submit">Add</AddButton>
    </StyledForm>
  );
};

export default AddItemForm;
