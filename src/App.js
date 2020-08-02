import React from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { name: "Sujan", age: "21" },
      { name: "suraj", age: "28" },
      { name: "John", age: "56" },
    ],
    otherState: "SOme other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked')
    this.setState({
      persons: [
        { name: newName, age: "21" },
        { name: "Suraj", age: "28" },
        { name: "John", age: "76" },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Adarsh", age: "21" },
        { name: event.target.value, age: "28" },
        { name: "John", age: "76" },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "John cena")}
          >
            My Hobbies: Horse Racing
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <p></p>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

export default App;
