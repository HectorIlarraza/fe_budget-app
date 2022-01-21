import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TransactionEditForm() {
    const API_URL = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        date: "",
        item_date: "",
        amount: 0,
        from: "",
        category: "",
    });

    const handleTextChange = (e) => {
        setTransaction({ ...transaction, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        axios.get(`${API_URL}/transactions/${index}`)
        .then((res) => setTransaction(res.data))
        .catch(() => navigate("/not-found"));
    }, [index, navigate, API_URL]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/tranactions/${index}`, transaction)
        .then(() => navigate(`/transactions/${index}`))
        .catch((err) => console.log(err))
    };

  return (
    <div className="Edit">
        <form onChange={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input 
                id="date"
                value={transaction.date}
                type="text"
                onChange={handleTextChange}
                placeholder="date"
                required 
            />
            <label htmlFor="item_name">Name</label>
            <input 
                id="item_name"
                value={transaction.item_name}
                type="text"
                onChange={handleTextChange}
                placeholder="item_name"
                required 
            />
            <label htmlFor="amount">Amount</label>
            <input 
                id="amount"
                value={transaction.amount}
                type="number"
                onChange={handleTextChange}
                placeholder="amount"
                required 
            />
            <label htmlFor="from">From</label>
            <input 
                id="from"
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                placeholder="from"
                required 
            />
            <label htmlFor="category">Category</label>
            <input
                id="category"
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="type of transaction"
            />
            <br />
            <input type="submit" />
        </form>
        <Link to={`/transactions/${index}`}>
            <button>Back</button>
        </Link>
    </div>
  );
}

export default TransactionEditForm;
