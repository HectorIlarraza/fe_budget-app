import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/transactions/${index}`)
        .then((res) => setTransaction(res.data))
        .catch(() => navigate("/not-found"));
    }, [index, navigate]);

    const handleDelete = () => {
        axios.delete(`${API_URL}/transactions/${index}`)
        .then((res) => navigate("/logs"))
        .catch((err) => console.log(err));
    };

    return (
        <article>
            <h4>{transaction.from}</h4>
            <h5>
                <span>
                    Item purchase: {transaction.item_name} Amount: {transaction.amount}
                </span>
            </h5>
            <h6>Date: {transaction.date}</h6>
            <p>Category: {transaction.category}</p>
            <div className="showNavigation">
                <div>
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/transactions/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default TransactionDetails;
