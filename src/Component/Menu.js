import React from "react";
import DrinksMenu from "./DrinksMenu";
import SushiMenu from "./SushiMenu";
import LunchMenu from "./LunchMenu";
import DinnerMenu from "./DinnerMenu";
import HappyhourMenu from "./HappyhourMenu";
// import Contact from "./Contact";
import Welcome from "./Welcome";

function Menu() {
  return (
    <>
      <Welcome />
      <DrinksMenu />
      <SushiMenu />
      <LunchMenu />
      <DinnerMenu />
      <HappyhourMenu />
      {/* <Contact /> */}
    </>
  );
}

export default Menu;
