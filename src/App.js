import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Person/>
        <Person/>
      </div>
    )
  }
}

export default App;
