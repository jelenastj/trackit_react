
import React, { Component } from "react";
import axios from "axios";
import "../../style/Login.css";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }

    this.handleSubmit = (e) => {
      const { email, password, password_confirmation } = this.state;

      axios
        .post(
          "http://localhost:3001/registrations",
          {
            user: {
              email: email,
              password: password,
              password_confirmation: password_confirmation
            }
          },
          { withCredentials: true }
        )
        .then(response => {
          if (response.data.status === "created") {
            this.props.handleSuccessfulAuth(response.data);
          }
        })
        .catch(error => {
          console.log("registration error", error);
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
          <div className="form-control-log">
            <input
              type="password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              placeholder="Password confirmation"
              onChange={this.handleChange}
              required
              />
          </div>
          <button type="submit">Sign up</button>
        </form>
       
      </div>
     
    )
  }
}
