import React, { Component } from "react";
import redux_logo from "../assets/redux.png";
import "../App.css";

import Counter from "./CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={redux_logo} className="App-logo" alt="redux_logo" />
          <h1 className="App-title">Redux</h1>
        </header>
        <div className="App-intro">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
