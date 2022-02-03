import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";

import Mealtem from "./MealItem/Mealtem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 10
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 20
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 10
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 10
  },
  {
    id: "m5",
    name: "Vegan Special",
    description: "Healthy...and No Meat or Dairy...",
    price: 10
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, index) => {
    return <Mealtem key={index} meal={meal} />;
  });

  return (
    <section className={classes.container}>
      <Card className={classes.meals}>
        <ul key="meals_01">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
