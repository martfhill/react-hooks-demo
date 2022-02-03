import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

const App = () => {
  const [cartShow, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };
  const cartHideHandler = () => {
    setCartShow(false);
  };
  
  return (
    <CartProvider>
      <main>
        {cartShow && <Cart onHideCart={cartHideHandler} />}
        <Header onShowCart={cartShowHandler} />
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
