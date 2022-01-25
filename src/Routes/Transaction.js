import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Coins from "../Components/Animations/coin.gif";

const Styles = styled.div`
  .nav-link {
    color: green;
  }
`;

function Transaction({ transaction, index }) {
  let currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(transaction.amount);

  return (
    <tr className="Transaction">
      <td>{transaction.date}</td>
      <Styles>
        <td className="anchor">
          <Nav activeKey="/home">
            <Nav.Link href="/home" as={Link} to={`/transactions/${index}`}>
              {transaction.itemName}
            </Nav.Link>
          </Nav>
        </td>
      </Styles>
      <td>
        <img src={Coins} alt="coins" width="5%" height="5%" />
        {currencyFormat}
      </td>
    </tr>
  );
}

export default Transaction;
