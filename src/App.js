import React, { Component } from 'react';
import './App.css';

const { Component } = React;
const { connect, Provider } = ReactRedux;
const { combineReducers, createStore } = Redux;

class ControlPad extends Component{
  render(){
    return 
  }
}

class ToneButton extends Component{
  render(){
    return  (
      <div></div>
    )
  }
}

class GameBoard extends Component{
  render(){
    return (
      <div>Hello World</div>
      <ToneButton />
      <ToneButton />
      <ToneButton />
      <ToneButton />
      <ControlPad/>
    ); 
  }
}

class Game extends Component{
  render(){
    return <GameBoard/>
  }
}

export default Game;