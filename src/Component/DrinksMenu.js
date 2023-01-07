import React from "react";
import { MAIN, Title, Item, Text } from "../styles/styleItems";
import Drinks from "./data/Drinks.json";

function DrinksMenu() {
  return (
    <>
      <MAIN>
        <Title id="drinks">Let's Drink</Title>

        <section>FUN MIXED</section>
        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "FUN MIXED")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>

        <section>MARTINI</section>

        <img className="martini" src="/images/martini.jpg" alt="" />

        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "MARTINI")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>
        <section>SAKE</section>

        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "SAKE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>
        <section>BEER</section>

        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "BEER")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>
        <section>WHITE WINE</section>

        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "WHITE WINE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>

        <section>ROŚE</section>
        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "ROŚE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>

        <section>RED WINE</section>
        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "RED WINE")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>

        <section>NON ALCOHOLIC</section>
        <Item>
          {Drinks.drinks
            .filter((i) => i.category === "NON ALCOHOLIC")
            .map((item) => {
              const { title, price, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>
      </MAIN>
    </>
  );
}

export default DrinksMenu;
