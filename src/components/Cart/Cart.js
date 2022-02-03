import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  // Invoked from CartItem
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, qty: 1 });
  };

  const totalCost = `$${Number.parseFloat(ctx.totalCost).toFixed(2)}`;
  // console.log('Cart CTX', totalCost)
  const hasItems = ctx.items.length > 0;
  const cartItems = (
    <ul className={classes.cart__items}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
          />
        );
      })}
    </ul>
  );

  const closeHandler = () => {
    props.onHideCart();
  };
  const orderHandler = () => {
    console.log("Order Modal");
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.cart__title}>Order Cart</div>
      <div className={classes.total}>
        {cartItems}
        <div className={classes.price__items}>
          <span className={classes.total__name}>Total Amount: </span>
          <span className={classes.total__price}>{totalCost}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.button__alt} onClick={closeHandler}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Place Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
