import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TriviaGame from './trivia_game';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TriviaGame ok={"ok"} />
      </div>
    );
  }
}

export default App;
