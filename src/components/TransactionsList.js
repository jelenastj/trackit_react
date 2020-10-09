import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  function mapTrans() {
    if (props.trans !== "") {
      return props.trans.map(tran => {
        return <Transaction key={tran.id} tran={tran} />
      })
    }
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h2 className="ui center aligned header">Date</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Description</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Category</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Amount</h2>
          </th>
        </tr>
        {mapTrans()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
