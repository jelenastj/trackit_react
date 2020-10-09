import React, { Component } from 'react';
import axios from 'axios';
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";
const URL = " http://localhost:3001/transactions";
import "../style/App.css";



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trans: [],
      term: "",
    }
  }

  handleLogoutClick = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true }).then(r => {
      this.props.handleLogout();
      this.props.history.push("/");
    }).catch(error => {
      console.log("logout error", error)
    })
  }

  componentDidMount = () => {
    fetch(URL).then(r => r.json()).then(trans => this.setState({ trans }))
  }
  handleInput(newTran) {
    console.log(newTran)
    this.setState({
      trans: { ...this.state.trans, newTran }
    });
  };

  addTrans = (tran) => {
    this.setState({
      trans: [...this.state.trans, tran]
    });
  };

  searchTerm = (e) => {
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <div>
        <button className="logout-btn" onClick={() => this.handleLogoutClick()}>Logout</button>
        <h1></h1>
        <Search searchTerm={this.searchTerm} />
        <h1></h1>
        <AddTransactionForm addTrans={this.addTrans} />
        <TransactionsList trans={this.state.trans
          .filter((tran) => tran.description.toLowerCase().includes(this.state.term))} />
        {/* <h1>Status: {props.loggedInStatus}</h1> */}
      </div>
    )
  }
}
