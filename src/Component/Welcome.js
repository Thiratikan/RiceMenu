import React from "react";
import { Header, Container } from "../styles/styleMenu";
import Navbar from "./Navbar";

function Welcome() {
  return (
    <>
      <Container>
        <Header>
          <img src="/images/ricelogo.PNG" alt="" />
          <hr />
          <p>
            Welcome to Rice Restaurant. We are strictly following CDC guidelines
            regarding Covid-19. Your health and the health of our staff are our
            utmost priority so we have provided this online menu for you to
            access in order to eliminate the possibility of any cross
            contamination.
          </p>
          <h1>Thank you for dining in with us.</h1>
        </Header>
        <Navbar />
      </Container>
    </>
  );
}

export default Welcome;
