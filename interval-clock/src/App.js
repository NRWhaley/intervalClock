
import React, { Component } from 'react';
import Clock from './components/clock';
import './App.css';

class App extends Component {

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
  }
}

export default App;
