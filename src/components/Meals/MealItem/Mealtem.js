import React, { useContext } from "react";
import classes from "./Mealtem.module.css";
import MealItemForm from "./MealItemForm";

import CartContext from '../../../context/CartContext';

const Mealtem = (props) => {
  //console.log('Mealtem', props)
  const ctx = useContext(CartContext);
  const price = `$${Number.parseFloat(props.meal.price).toFixed(2)}`;
  
  const addToCartHandler = (qty) =>{
    ctx.addItem({    
      id: props.meal.id,
      name: props.meal.name,
      qty: qty,
      price: props.meal.price
    })

  }
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.meal.name}</h3>
      </div>
      <div className={classes.description}>{props.meal.description.trim()}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemForm
          id={props.meal.id} // this is new!
          key={props.meal.id}
          name={props.meal.name}
          description={props.meal.description}
          price={props.meal.price}
          onAddtoCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default Mealtem;
