import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.tran.date}</td>
      <td>{props.tran.name}</td>
      <td>{props.tran.category}</td>
      <td>{props.tran.amount}</td>
    </tr>
  );
};

export default Transaction;
