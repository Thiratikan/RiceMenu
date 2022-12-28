import styled from "styled-components";

export const Header = styled.div`
  font-family: "Roboto", sans-serif;
  color: #413e3e;
  section {
    display: inline-block;
  }
  img {
    height: 100px;
    padding: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  hr {
    display: block;
    border: 0;
    border-top: 1px solid black;
    margin: 5px 60px;
    padding: 15px;
  }
  p {
    padding-left: 30px;
    padding-right: 30px;
    text-indent: 50px;
    text-align: justify;
    font-weight: lighter;
  }
  h1 {
    margin: auto;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Nav = styled.div`
  background: transparent;
  padding: 20px;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;

  ul {
    display: flex;
    flex-direction: row;
    space-between: center;
    justify-content: end;
  }
  li {
    margin-right: 80px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
    li {
      margin-right: 15px;
    }
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid black;
    margin: 5px 40px;
    padding: 15px;
  }
`;
