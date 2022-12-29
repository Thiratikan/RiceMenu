import React from "react";
import { DRINKS, Title, Item, Text } from "../styles/styleDrinks";
import Sushi from "./data/Sushi.json";

function SushiMenu() {
  return (
    <>
      <DRINKS>
        <Title id="sushi">SuShi</Title>

        <section>Bento for Two</section>
        <Item>
          {Sushi.sushi
            .filter((i) => i.category === "Bento for Two")
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

        <section>Nigiri | Sashimi (2 pcs per order)</section>
        <Item>
          {Sushi.sushi
            .filter((i) => i.category === "Nigiri | Sashimi (2 pcs per order)")
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

        <section>Traditional Rolls (6 pcs)</section>
        <Item>
          {Sushi.sushi
            .filter((i) => i.category === "Traditional Rolls (6 pcs)")
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

        <section>Sashimi (8 pcs)</section>
        <Item>
          {Sushi.sushi
            .filter((i) => i.category === "Sashimi (8 pcs)")
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

        <section>
          Rice Bowl (** all Rice Bowls will be topped with sesame seeds)
        </section>
        <Item>
          {Sushi.sushi
            .filter(
              (i) =>
                i.category ===
                "Rice Bowl (** all Rice Bowls will be topped with sesame seeds)"
            )
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

        <section>Sides</section>
        <Item>
          {Sushi.sushi
            .filter((i) => i.category === "Sides")
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

export default SushiMenu;
