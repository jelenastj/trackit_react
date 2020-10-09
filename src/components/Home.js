import React, { Component } from 'react';
import "../style/App.css";
import Registration from './auth/Registration';
import Login from './auth/Login'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }


  render() {
    return (
      <div className="wrapper" >

        <div className="title-log">Expense tracker</div>
        {/* <h1>Status: {this.props.loggedInStatus} </h1> */}
        {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
        <div className="two-box">
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        
        </div>

      </div>
    )
  }
}
