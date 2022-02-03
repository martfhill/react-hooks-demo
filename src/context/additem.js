export const addItem = (state, action) => {
  const updatedTotalAmount =
    state.totalCost + action.item.price * action.item.qty;

  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );
  const existingCartItem = state.items[existingCartItemIndex];
  let updatedItems;

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      qty: existingCartItem.qty + action.item.qty,
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat(action.item);
  }
  return {
    items: updatedItems,
    totalCost: updatedTotalAmount,
  };
};
