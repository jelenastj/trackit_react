import React, { Component } from 'react';
import Transaction from "./Transaction";

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  mapTrans =() =>{
   
    if (trans !== {}) {
      return trans.map(tran => {
        return <Transaction key={tran.id} tran={tran} />
      })
    }
  }
  // componentDidMount() {
  //   this.mapTrans();
  // }
 
  render() {
    const id = this.props.user.id;
    const trans = this.props.trans.filter((tran) => tran.user_id === id)
    
  return(
        <table className = "ui celled striped padded table" >
      <tbody>
        <tr>
          <th>
            <h2 className="ui center aligned header">Date</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Name</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Category</h2>
          </th>
          <th>
            <h2 className="ui center aligned header">Amount</h2>
          </th>
        </tr>

        { trans.map(tran => {
        return <Transaction key={tran.id} tran={tran} />})}

      </tbody>
        </table>
      );
    };
  }

