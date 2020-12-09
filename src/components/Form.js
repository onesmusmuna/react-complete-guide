import React, {Component, Fragment} from "react";
import "./form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    };
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;

    type === "checkbox"
      ? this.setState({[name]: checked})
      : this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(`First Name: ${this.state.firstName}`);
    console.log(`Last Name: ${this.state.lastName}`);
    console.log(`Is Friendly: ${this.state.isFriendly}`);
    console.log(`Gender: ${this.state.gender}`);
    console.log(`Favorite color: ${this.state.favColor}`);
    console.log(`\n\n\n\n\n\n\n`);

    return (
      <Fragment>
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

          <label>Is Friendly</label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            className="checkbox"
          />

          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={this.state.gender === "other"}
              onChange={this.handleChange}
            />
            Other
          </label>

          <label>Favorite color</label>
          <select
            name="favColor"
            value={this.state.favColor}
            onChange={this.handleChange}
          >
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
          </select>

          <button type="submit">Submit</button>

          {/*
          This is how we use textare 
          <textarea value={} /> 
          
          */}
        </form>
      </Fragment>
    );
  }
}

export default Form;
