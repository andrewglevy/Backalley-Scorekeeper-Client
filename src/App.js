import React, { Component } from 'react';
import './App.css';
import MainContent from './components/mainContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  };
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Backalley Scorekeeper</h1>
        </header>
        <div className="mainContent">
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
