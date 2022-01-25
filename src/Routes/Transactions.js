import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Transaction from "./Transaction.js";
import axios from "axios";
import Jumbotron from "../Components/Jumbotron.js";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [totalArr, setTotalArr] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        amountTotal(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const amountTotal = (totalArr) => {
    setTotalArr(
      totalArr.map((total) => total.amount).reduce((a, b) => a + Number(b))
    );
  };

  return (
    <div className="Transactions">
      <Jumbotron totalArr={totalArr} />
      <section>
        <Table striped bordered hover variant="dark">
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Transactions;
