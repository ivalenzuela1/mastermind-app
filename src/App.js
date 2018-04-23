import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StartButton from './StartButton.js';
import SelectColors from './SelectColors.js';
import Dropdown from './test.js';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        colors: ["red", "blue", "green", "black", "white", "yellow", "orange"],
    };
    //this.showCurrentTodo = this.showCurrentTodo.bind(this);
}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.colors}</div>

        <SelectColors />

        <StartButton colors={this.state.colors} />
   
        
      </div>

    );
  }
}

export default App;

