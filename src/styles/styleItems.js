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

export const Desc = styled.div`
  margin-top: 5px;
  width: 330px;
`;

export const MAIN = styled.div`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 6px;
  font-weight: lighter;

  section {
    font-weight: 900;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: green;
  }
  div {
    position: relative;
    margin-bottom: 5px;
  }
  h1 {
    color: black;
  }
  h2 {
    font-size: 11px;
    weight: 20px;
    color: #413e3e;
    margin-top: 5px;
  }
  img {
    height: 350px;
    weight: 200px;
    position: absolute;
    z-index: -1;
    margin-left: 70px;
    margin-top: 130px;
    background-image: none;
  }

  .martini {
    margin-left: 72px;
    margin-top: 130px;
  }
  .sushi {
    height: 250px;
    weight: 150px;
    margin-left: 120px;
    margin-top: -80px;
  }

  .donburi {
    height: 300px;
    weight: 200px;
    margin-left: 80px;
    margin-top: 40px;
  }

  .tomyum {
    margin-left: 70px;
    margin-top: -50px;
  }
  .rice {
    height: 180px;
    weight: 100px;
    margin-left: 140px;
    margin-top: 260px;
  }
  .padthai {
    height: 200px;
    weight: 50px;
    margin-left: 80px;
    margin-top: 330px;
  }

  .wine {
    margin-left: 90px;
    margin-top: -140px;
  }

  .price {
    margin-left: 330px;
    margin-top: -15px;
    color: black;
  }
`;
