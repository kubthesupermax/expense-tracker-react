import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

// components
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  // console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
