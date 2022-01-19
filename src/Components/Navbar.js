import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <h1>
                <Link to="/budget">Budget App</Link>
            </h1>
            <button>
                <Link to="/budget/new">New Transaction</Link>
            </button>
        </nav>
    );
}