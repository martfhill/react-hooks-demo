import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/CartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnbump, setBtnBump] = useState(false);

  const { items } = ctx;
  const cartItemsNumber = items.reduce((currentNumber, item) => {
    return Number(currentNumber + item.qty);
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${btnbump ? classes.bump : ""}`;
  return (
    <React.Fragment>
      <button className={btnClasses} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{cartItemsNumber}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
