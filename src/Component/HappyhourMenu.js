import React from "react";
import { DRINKS, Title, Item, Text } from "../styles/styleDrinks";
import Happyhour from "./data/Happyhour.json";

function HappyhourMenu() {
  return (
    <>
      <DRINKS>
        <Title id="happyhour">Happy Hour</Title>

        <section>WHITE WINE</section>
        <Item>
          {Happyhour.happyhour
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

        <section>RED WINE</section>
        <Item>
          {Happyhour.happyhour
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

        <section>APPERTIZER</section>
        <Item>
          {Happyhour.happyhour
            .filter((i) => i.category === "APPERTIZER")
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

        <section>Sushi</section>
        <Item>
          {Happyhour.happyhour
            .filter((i) => i.category === "Sushi")
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

export default HappyhourMenu;
