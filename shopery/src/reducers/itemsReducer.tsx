export interface Item {
  _id: string;
  name: string;
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
      const itemsCopy = state.slice(0);
      itemsCopy.forEach(item => {
        if (!item.isShared) item.isShared = true;
      });
      return [...itemsCopy];

    case "HIDE_LIST":
      const itemsCopy_2 = state.slice(0);
      itemsCopy_2.forEach(item => {
        if (item.isShared) item.isShared = false;
      });
      return [...itemsCopy_2];

    case "SHARE_ITEM":
      const stateCopy = state.slice(0);
      stateCopy.forEach(item => {
        if (item._id === action.item._id) {
          item.isShared = true;
        }
      });
      return [...stateCopy];

    case "HIDE_ITEM":
      const stateCopy_2 = state.slice(0);
      stateCopy_2.forEach(item => {
        if (item._id === action.item._id) {
          item.isShared = false;
        }
      });
      return [...stateCopy_2];

    default:
      return state;
  }
};
