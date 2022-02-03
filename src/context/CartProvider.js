import React, { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import { addItem } from "./additem";
import { removeItem } from "./removeItem";


// Default Cart State
const defaultCartState = {
  items: [],
  totalCost: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADDITEM') {    
    const result = addItem(state, action);  
    return {
      items: result.items,
      totalCost: result.totalCost
    };
  }

  if (action.type === 'REMOVEITEM') {   
    const result = removeItem(state, action); 
    return {
      items: result.items,
      totalCost: result.totalCost
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // Invoked from Cart
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADDITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVEITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalCost: cartState.totalCost,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  useEffect(() => {}, []);
 
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
