import { useState, useEffect } from "react";
import Transaction from "./Transaction.js";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions(){
    const [transactions, setTransactions] = useState([]);
    const [totalArr, setTotalArr] = useState(0);

    useEffect(() => {
        axios.get(`${API_URL}/transactions`)
        .then((res) => {
            setTransactions(res.data);
            amountTotal(res.data);
        })
        .catch((err) => {throw err});
    }, []);

    const amountTotal = (totalArr) => {
        // totalArr.map(total => total.amount).reduce((a,b) => a + b)
        setTotalArr(totalArr.map(total => total.amount).reduce((a,b) => a + b))
    }

    return (
        <div className="Transactions">
            <h2>Bank Account Total: {totalArr} </h2>
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
