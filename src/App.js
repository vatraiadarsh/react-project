import React from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { id: "kfijojfj", name: "Sujan", age: "21" },
      { id: "kf76vjfj", name: "suraj", age: "28" },
      { id: "kfju56fj", name: "John", age: "56" },
    ],
    otherState: "SOme other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // or const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // spread operator we have the new array from the objects of the old array
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1 px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red','bold]
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>
          Props allow you to pass data from a parent (wrapping) component to a
          child (embedded) component.
        </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

export default App;
