
import React, { Component } from "react";
import axios from "axios";
import "../../style/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }

    this.handleSubmit = (e) => {
      const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
       
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
       }
      })
      .catch(error => {
        console.log("login error", error);
      });
    e.preventDefault();
    }
    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }
  render() {
    return (
      
      <div className="log-container">
        <p >Already have an account?</p>
        <form className="form-log" onSubmit={this.handleSubmit}>
        <div className="form-control-log">
          <input 
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          </div>
         
          <div className="form-control-log">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          </div>
        
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
