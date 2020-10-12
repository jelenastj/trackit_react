import React, { Component } from "react";
import Axios from "axios";

class AddTransactionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      name: "",
      category: "",
      amount: null
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };
  
  onFormSubmit = (e) => {
  
    e.preventDefault(); 
    if (
      this.state.date.length !== 0 &&
      this.state.name.length !== 0 &&
      this.state.category.length !== 0 &&
      this.state.amount.length !== 0
    ) {
      Axios.post("http://localhost:3001/transactions", {
        transaction: {
          user_id: this.props.user.id,
          date: this.state.date,
          name: this.state.name,
          category: this.state.category,
          amount: this.state.amount
        },
      }).then((res) => {
      this.props.addTrans(res.data)
      });

      this.setState({
        date: "",
        name: "",
        category: "",
        amount: "",
      });
    }
  };

    render() {
      
      return (
        <div className="container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <div className="form-control">
              <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
            </div>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" onChange={this.handleChange}value={this.state.name} />
            </div>
            <div className="form-control">
              <input type="text" name="category" placeholder="Category" onChange={this.handleChange}value={this.state.category} />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                step="0.01"
                onChange={this.handleChange}
                value={this.state.amount}
              />
            </div>
            <button className="ui button" type="submit" >
              Add Transaction
          </button>
          </form>
        </div>
      );
    }
  }

  export default AddTransactionForm;
