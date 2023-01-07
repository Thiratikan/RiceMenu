import React from "react";
import { MAIN, Title, Item, Text } from "../styles/styleItems";
import Happyhour from "./data/Happyhour.json";

function HappyhourMenu() {
  return (
    <>
      <MAIN>
        <Title id="happyhour">Happy Hour</Title>

        <section>WHITE WINE</section>

        <img className="wine" src="/images/wine.png" alt="" />

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

        <section>Sushi (5 pcs. $5)</section>
        <Item>
          {Happyhour.happyhour
            .filter((i) => i.category === "Sushi")
            .map((item) => {
              const { title, id } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                  </Text>
                </div>
              );
            })}
        </Item>
      </MAIN>
    </>
  );
}

export default HappyhourMenu;
