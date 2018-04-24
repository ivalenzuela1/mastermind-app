import React, { Component } from 'react';
import './App.css';
import StartButton from './StartButton.js';
import GameContainer from './GameContainer.js';
import SelectColors from './SelectColors.js';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        colors: ["red", "blue", "green", "yellow", "orange"],
    };
 

}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MasterMind</h1>
        </header>
        <br />

        <GameContainer /> <br />

         <div>Select Colors: </div>
        <span className='redDot'></span>
        <span className='blueDot'></span>
        <span className='greenDot'></span>
        <span className='yellowDot'></span>
        <span className='orangeDot'></span>
        <br />

        <SelectColors /> <br />

        <StartButton colors={this.state.colors} />

        


       

   
        
      </div>

    );
  }
}

export default App;

