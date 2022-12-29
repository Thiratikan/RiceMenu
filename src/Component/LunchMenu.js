import React from "react";
import { DRINKS, Title, Item, Text } from "../styles/styleDrinks";
import Lunch from "./data/Lunch.json";

function LunchMenu() {
  return (
    <>
      <DRINKS>
        <Title id="lunch">Lunch</Title>

        <section>NOODLES</section>
        <Item>
          {Lunch.lunch
            .filter((i) => i.category === "NOODLES")
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

        <section>RICE</section>
        <Item>
          {Lunch.lunch
            .filter((i) => i.category === "RICE")
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

        <section>SOUP</section>
        <Item>
          {Lunch.lunch
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
          {Lunch.lunch
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
          {Lunch.lunch
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
          {Lunch.lunch
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

export default LunchMenu;
