import { Nav, Title } from "../styles/styleMenu";

function Navbar() {
  return (
    <>
      <Nav>
        <hr />
        <Title id="lunch"> &#9758; MENU &#9756;</Title>
        <ul>
          <li>
            <a href="#drinks">Drinks</a>
          </li>
          <li>
            <a href="#sushi">Sushi</a>
          </li>
          <li>
            <a href="#lunch">Lunch</a>
          </li>
          <li>
            <a href="#dinner">Dinner</a>
          </li>
          <li>
            <a href="#happyhour">Happy Hour</a>
          </li>
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;
