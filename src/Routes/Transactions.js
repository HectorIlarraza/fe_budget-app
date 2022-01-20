import { useState, useEffect } from "react";
import Transaction from "./Transaction.js";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/transactions`)
        .then((res) => {
            console.log(res.data);
            setTransactions(res.data);
        })
        .catch((err) => {
            throw err;
        });
    }, []);

    return (
        <div className="Transactions">
            <section>
                <table>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Transactions;
