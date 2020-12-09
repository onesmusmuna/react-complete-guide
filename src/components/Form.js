import React, {Component} from "react";
import "./form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        <h1>First Name: {this.state.firstName}</h1>
        <h1>Last Name: {this.state.lastName}</h1>
      </div>
    );
  }
}

export default Form;
