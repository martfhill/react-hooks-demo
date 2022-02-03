export const removeItem = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.id
  );
  const existingItem = state.items[existingCartItemIndex];
  const updatedTotalAmount = state.totalCost - existingItem.price;
  let updatedItems;
  if (existingItem.qty === 1) {
    updatedItems = state.items.filter((item) => item.id !== action.id);
  } else {
    const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  }
  return {
    items: updatedItems,
    totalCost: updatedTotalAmount,
  };
};
