import React, { Component } from "react";
const URL = " http://localhost:3001/transactions";

class AddTransactionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      description: "",
      category: "",
      amount: null
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const tran = {
      id: Math.random(),
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(tran),
    });

    this.props.addTrans(tran);
  };


  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="form-control">
            <input type="date" name="date" onChange={this.handleChange} />
          </div>
          <div className="form-control">
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} />
            </div>
            <div className="form-control">
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} />
            </div>
            <div className="form-control">
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
