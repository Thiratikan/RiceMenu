import React from "react";
import { DRINKS, Title, Item, Text } from "../styles/styleDrinks";
import Dinner from "./data/Dinner.json";

function DinnerMenu() {
  return (
    <>
      <DRINKS>
        <Title id="dinner">Dinner</Title>

        <section>SOUP</section>
        <Item>
          {Dinner.dinner
            .filter((i) => i.category === "SOUP")
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

        <section>APPETIZER</section>
        <Item>
          {Dinner.dinner
            .filter((i) => i.category === "APPETIZER")
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

        <section>SPECIALTY</section>
        <Item>
          {Dinner.dinner
            .filter((i) => i.category === "SPECIALTY")
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

        <section>TRADITIONAL THAI</section>
        <Item>
          {Dinner.dinner
            .filter((i) => i.category === "TRADITIONAL THAI")
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
      </DRINKS>
    </>
  );
}

export default DinnerMenu;
