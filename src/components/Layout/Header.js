import React from "react";
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";


const Header = (props) => {
  
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Fab Food Mart</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='Table of Food Samples' />
      </div>
    </React.Fragment>
  );
};

export default Header;
