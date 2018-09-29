import React, { Component } from "react";
import "./App.css";

let str =
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
let urlArray = str.split(", ");
console.log(urlArray);
const SEGMENTS = [
  { url: urlArray[0], color: "green" },
  { url: urlArray[0], color: "red" },
  { url: urlArray[0], color: "yellow" },
  { url: urlArray[0], color: "blue" }
];

class SwitchButton extends Component {
  render() {
    return (
      <div className="rw bot">
        <h3 className="label inline">OFF </h3>
        <div className="sw-slot inline">
          <div className="switch" id="pwr-sw" />
        </div>
        <h3 className="label inline"> ON</h3>
      </div>
    );
  }
}
class SelectMode extends Component {
  render() {
    return (
      <div className="btn-box inline">
        <div className="round-btn but clickable" id="mode" />
        <h3 className="label">STRICT</h3>
        <div className="led" id="mode-led" />
      </div>
    );
  }
}
class StartButton extends Component {
  render() {
    return (
      <div className="btn-box inline">
        <div className="round-btn full-red but clickable" id="start" />
        <h3 className="label">START</h3>
      </div>
    );
  }
}
class StepCounter extends Component {
  render() {
    return (
      <div className="display inline">
        <h1 className="count led-off">--</h1>
        <h3 className="label">COUNT</h3>
      </div>
    );
  }
}
class ControlPad extends Component {
  render() {
    return (
      <div className="control-pad">
        <h1 className="brand">
          Simon
          <span className="small">&#174;</span>
        </h1>
        <div className="rw">
          <StepCounter />
          <StartButton />
          <SelectMode />
          <SwitchButton />
        </div>
      </div>
    );
  }
}

class ToneButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"tone-button inline" + " " + this.props.color}>
        <audio className="clip" src={this.props.soundUrl} />
      </div>
    );
  }
}

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game-board">
        <div className="wrap-in">
          <ToneButton
            color={this.props.segments[0].color}
            soundUrl={this.props.segments.url}
          />
          <ToneButton
            color={this.props.segments[1].color}
            soundUrl={this.props.segments.url}
          />
          <ToneButton
            color={this.props.segments[2].color}
            soundUrl={this.props.segments.url}
          />
          <ToneButton
            color={this.props.segments[3].color}
            soundUrl={this.props.segments.url}
          />
        </div>
        <ControlPad />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <GameBoard segments={[...SEGMENTS]} />;
  }
}

export default App;
