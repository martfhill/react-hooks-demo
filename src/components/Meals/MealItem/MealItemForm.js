import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "./Input";
const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true)
  const qtyInputRef = useRef();

  const submitHandler = (event) =>{

    event.preventDefault();
    const currentAmount = qtyInputRef.current.value;
    const currentAmountNumber = +currentAmount;
   
    if(currentAmount.trim().length === 0 || currentAmountNumber  < 1 || currentAmountNumber > 5)
    {
      setIsValid(false)
      return;
    }
    props.onAddtoCart(currentAmountNumber);
    
}
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={qtyInputRef}     
        label="Qty"
        input={{
          id: "qty_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p className={classes.error}>Invalid Amount - (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
