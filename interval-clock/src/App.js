
import React, { Component } from 'react';
import IntervalClock from './components/intervalClock';
import './App.css';

class App extends Component {

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <IntervalClock />
      </header>
    </div>
  );
  }
}

export default App;
