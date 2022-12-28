import React from "react";
import { DRINKS, Title } from "../styles/styleDrinks";
import Drinks from "./data/Drinks.json";

function DrinksMenu() {
  return (
    <>
      <DRINKS>
        <Title>Let's Drink</Title>
        <section>FUN MIXED</section>
        {Drinks.drinks.map((item) => {
          const { title, price } = item;
          return (
            <div>
              <h1>{title}</h1>
              <h2>{price}</h2>
            </div>
          );
        })}
      </DRINKS>
    </>
  );
}

export default DrinksMenu;
