import styled from "styled-components";

export const Title = styled.div`
  font-family: "Kaushan Script", cursive;
  font-size: 40px;
  margin-left: 20px;
`;

export const Item = styled.div`
  background-image: none;
`;

export const Text = styled.div`
  background-image: none;
`;

export const DRINKS = styled.div`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 6px;
  font-weight: lighter;

  section {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 5px;
  }
  div {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 5px;
  }
  h1 {
    background-image: none;
    display: inline;
  }
  img {
    height: 200px;
    weight: 150px;
    position: absolute;
    z-index: -1;
    left: 160px;
    bottom: -70px;
    background-image: none;
  }

  .price {
    position: absolute;
    left: 299px;
  }
`;
