export const itemsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_INITIAL":
      return [...action.items];
    case "ADD_ITEM":
      return [
        ...state,
        {
          _id: action.item._id,
          name: action.item.name,
          quantity: action.item.quantity,
          isShared: action.item.isShared,
          isBought: action.item.isBought
        }
      ];

    default:
      return state;
  }
};
