export interface Item {
  _id: string;
  name: string;
  userID?: string;
  quantity: number;
  isShared: boolean;
  isBought: boolean;
}

export const itemsReducer = (state: Item[], action: any) => {
  switch (action.type) {
    case "SET_INITIAL":
      return [...action.items];

    case "ADD_ITEM":
      return [
        {
          _id: action.item._id,
          name: action.item.name,
          quantity: action.item.quantity,
          isShared: action.item.isShared,
          isBought: action.item.isBought
        },
        ...state
      ];

    case "DELETE_ITEM":
      return state.filter((item: Item) => item._id !== action.item._id);

    case "SHARE_LIST":
      const itemsCopy_shareAll = state.slice(0);
      itemsCopy_shareAll.forEach(item => {
        if (!item.isShared) item.isShared = true;
      });
      return [...itemsCopy_shareAll];

    case "HIDE_LIST":
      const itemsCopy_hideAll = state.slice(0);
      itemsCopy_hideAll.forEach(item => {
        if (item.isShared) item.isShared = false;
      });
      return [...itemsCopy_hideAll];

    case "SHARE_ITEM":
      const itemsCopy_shareOne = state.slice(0);
      itemsCopy_shareOne.forEach(item => {
        if (item._id === action.item._id) {
          item.isShared = true;
        }
      });
      return [...itemsCopy_shareOne];

    case "HIDE_ITEM":
      const itemsCopy_hideOne = state.slice(0);
      itemsCopy_hideOne.forEach(item => {
        if (item._id === action.item._id) {
          item.isShared = false;
        }
      });
      return [...itemsCopy_hideOne];

    case "EDIT_ITEM":
      const itemsCopy_edit = state.slice(0);
      itemsCopy_edit.forEach(item => {
        if (item._id === action.item._id) {
          item.name = action.item.name;
          item.quantity = action.item.quantity;
          item.isShared = action.item.isShared;
        }
      });
      return [...itemsCopy_edit];

    default:
      return state;
  }
};
