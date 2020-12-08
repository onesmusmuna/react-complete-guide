import React from "react";
import Person from "./components/Person";

class App extends React.Component {
  state = {
    persons: [
      {id: 1, name: "John", age: 21},
      {id: 2, name: "Max", age: 15},
      {id: 3, name: "Jane", age: 22}
    ],
    isPersonsVisible: false
  };

  togglePersonHandler = () => {
    this.setState((state) => {
      return {...state, isPersonsVisible: !state.isPersonsVisible};
    });
  };

  render() {
    let persons = null;

    if (this.state.isPersonsVisible) {
      persons = (
        <React.Fragment>
          {this.state.persons.map((person) => {
            return <Person key={person.id} name={person.name} age={person.age} />;
          })}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <button onClick={this.togglePersonHandler} className="btn">
          Show | hide
        </button>

        {persons}
      </React.Fragment>
    );
  }
}

export default App;
