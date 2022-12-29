import React from "react";
import { DRINKS, Title, item, text } from "../styles/styleDrinks";
import Drinks from "./data/Drinks.json";

function DrinksMenu() {
  return (
    <>
      <DRINKS>
        <Title id="drinks">Let's Drink</Title>
        <section>FUN MIXED</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "FUN MIXED")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <img src="/images/martini.png" alt="" />
        <section>MARTINI</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "MARTINI")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>SAKE</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "SAKE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>BEER</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "BEER")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>WHITE WINE</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "WHITE WINE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>ROŚE</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "ROŚE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>RED WINE</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "RED WINE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
        <section>NON ALCOHOLIC</section>
        <item>
          {Drinks.drinks
            .filter((i) => i.category === "NON ALCOHOLIC")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </text>
                </div>
              );
            })}
        </item>
      </DRINKS>
    </>
  );
}

export default DrinksMenu;
