import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionNewForm() {
    const [transaction, setTransaction] = useState({
        date: "",
        item_name: "",
        amount: 0,
        from: "",
        category: "",
    });
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    const handleTextChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/transactions`, transaction)
        .then(() => navigate("/transactions"))
        .catch((err) => console.log(err));
    };

    return (
        <div className="New">
            <form onChange={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input 
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="date of transaction"
                    required 
                />
                <label htmlFor="item_name">Name</label>
                <input 
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="type of transaction"
                    required 
                />
                <label htmlFor="amount">Amount</label>
                <input 
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amount of transaction"
                    required 
                />
                <label htmlFor="from">From</label>
                <input 
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="location of transaction"
                    required 
                />
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="type of transaction"
                    required
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default TransactionNewForm;
