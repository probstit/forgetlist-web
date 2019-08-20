export interface Item {
  _id: string;
  name: string;
  quantity: number;
  isShared: boolean;
  isBought: boolean;
}

export const itemsReducer = (state: any, action: any) => {
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

    default:
      return state;
  }
};
