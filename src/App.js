import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Person name="Sujan" age="21"/>
        <Person name="suraj" age="28"/>
        <Person name="John" age="56">My Hobbies: Horse Racing</Person>
      </div>
    )
  }
}

export default App;
