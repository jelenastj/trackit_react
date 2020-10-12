import React, { Component } from 'react';
import Axios from "axios";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../style/App.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
// import Registration from './auth/Registration';
// import Login from './auth/Login'


const history = createBrowserHistory();


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      trans: {}
    };
  }



  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
    Axios.delete("http//localhost:3001/logout", {
      withCredentials: true,
    }).catch((error) => {
      console.log("Errors: ", error);
    });
  }

  getTransactions = () => {
    Axios.get("http://localhost:3001/transactions").then((trans) => {
      this.setState( { trans})
      // console.log(store.articles);
    });
  };

  componentDidMount() {
    // console.log(this.props);
    this.checkLoginStatus();
    // this.populateStore();
  }

  handleSuccessfulAuth = (data) => {
    this.handleLogin(data);
    history.push("/dashboard");
  }

  checkLoginStatus = () => {
    Axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((res) => {
        if (
          res.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: res.data.user,
          });
        } else if (
          !res.data.loggedIn &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("Check login error: ", error);
      });
  };


  render() {
    return (
      <div className="grid-container">
        <Nav
          loggedInStatus={this.state.loggedInStatus}
          handleSuccessfulAuth={this.handleSuccessfulAuth}
          // handleLogout={this.handleLogout}
          user={this.state.user}
        />

        <Router history={history}>
         <Switch>
            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                  history={history}
                  handleLogout={this.handleLogout}
                  trans = {this.state.trans}
                />
              )}
            ></Route>
        </Switch>
        </Router>
      </div>
    );
  }
}



