import React from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      {id:"kfijojfj",  name: "Sujan", age: "21" },
      {id:"kf76vjfj",  name: "suraj", age: "28" },
      {id:"kfju56fj",  name: "John", age: "56" },
    ],
    otherState: "SOme other value",
    showPersons: false,
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

  

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // spread operator we have the new array from the objects of the old array
    persons.splice(personIndex,1);
    this.setState({persons});
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
          {this.state.persons.map((person,index) => {
            return (
              <Person key={person.id}
                name={person.name}
                age={person.age}
                click={()=>this.deletePersonHandler(index)}
              />
            );
          })}
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
