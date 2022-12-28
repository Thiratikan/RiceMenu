import React from "react";
import DrinksMenu from "./DrinksMenu";
import Sushi from "./Sushi";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Happyhour from "./Happyhour";
import Contact from "./Contact";
import Welcome from "./Welcome";

function Menu() {
  return (
    <>
      <Welcome />
      <DrinksMenu />
      <Sushi />
      <Lunch />
      <Dinner />
      <Happyhour />
      <Contact />
    </>
  );
}

export default Menu;
