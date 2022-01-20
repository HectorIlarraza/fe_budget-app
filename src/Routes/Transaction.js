import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return (
        <tr className="Transaction">
            <td>
                {transaction.date}
            </td>
            <td>
                {transaction.item_name}
            </td>
            <td>
                
            </td>
        </tr>
    )
}

export default Transaction;
