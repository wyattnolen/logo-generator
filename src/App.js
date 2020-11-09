import React, { Component } from "react";

import Canvas from "./Canvas/Canvas";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  state = {
    logoText: "",
  };

  inputChangedHandler = (event) => {
    this.setState({ logoText: event.target.value });
  };

  render() {
    return (
      <div className="App">
        {logo}
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.logoText}
        />
        <p>{this.state.logoText}</p>
        <Canvas input={this.state.logoText} />
      </div>
    );
  }
}

export default App;
