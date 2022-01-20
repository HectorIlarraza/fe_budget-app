import Transactions from "../Routes/Transactions.js";

function Index(){
    return (
        <div>
            <h2>Bank Account Total: </h2>
            <Transactions />
        </div>
    );
}

export default Index;