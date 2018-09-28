import React, { Component } from "react";
import "./App.css";

class ControlPad extends Component {
  render() {
    return <div />;
  }
}

class ToneButton extends Component {
  render() {
    return <div />;
  }
}

class GameBoard extends Component {
  render() {
    return (
      <div>
        <div>Hello World</div>
        <ToneButton />
        <ToneButton />
        <ToneButton />
        <ToneButton />
        <ControlPad />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <GameBoard />;
  }
}

export default App;
