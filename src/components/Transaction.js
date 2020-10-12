import React from "react";

export default class Transaction extends React.Component {
  constructor(props) {
  super(props);
}
getParsedDate(strDate) {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]);
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  date = mm + "-" + dd + "-" + yyyy;
  return date.toString();
}


  render() {
  return (
    
    <tr>
      <td>{this.getParsedDate(this.props.tran.date)}</td>
      <td>{this.props.tran.name}</td>
      <td>{this.props.tran.category}</td>
      <td>{this.props.tran.amount}</td>
    </tr>
  );
}
}
