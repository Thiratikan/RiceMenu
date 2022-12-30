import React from "react";
import { MAIN, Title, Item, Text, Desc } from "../styles/styleItems";
import Lunch from "./data/Lunch.json";

function LunchMenu() {
  return (
    <>
      <MAIN>
        <Title id="lunch">Lunch</Title>

        <section>NOODLES</section>
        <Item>
          {Lunch.lunch
            .filter((i) => i.category === "NOODLES")
            .map((item) => {
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <Desc>
                      <h2>{desc}</h2>
                    </Desc>
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
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <Desc>
                      <h2>{desc}</h2>
                    </Desc>
                  </Text>
                </div>
              );
            })}
        </Item>

        <img className="tomyum" src="/images/tomyum.png" alt="" />

        <section>SOUP</section>
        <Item>
          {Lunch.lunch
            .filter((i) => i.category === "SOUP")
            .map((item) => {
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <h2>{desc}</h2>
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
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <h2>{desc}</h2>
                  </Text>
                </div>
              );
            })}
        </Item>

        <img className="rice" src="/images/rice.png" alt="" />

        <section>SPECIALTY</section>
        <Item>
          {Lunch.lunch
            .filter((i) => i.category === "SPECIALTY")
            .map((item) => {
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <h2>{desc}</h2>
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
              const { title, price, id, desc } = item;
              return (
                <div key={id}>
                  <Text>
                    <h1>{title}</h1>
                    <h1 className="price"> {price}</h1>
                    <Desc>
                      <h2>{desc}</h2>
                    </Desc>
                  </Text>
                </div>
              );
            })}
        </Item>
      </MAIN>
    </>
  );
}

export default LunchMenu;
