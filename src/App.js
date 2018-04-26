import React, { Component } from 'react';
import './App.css';
import StartButton from './StartButton.js';
import Board from './Board.js';
import ColorList from './ColorList.js';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        colors: ['red','blue', 'yellow', 'green', 'orange'],
        selectedColor: '',
        currentGuess: [null, null, null, null]
    };
    this.selectColor = this.selectColor.bind(this);
}

selectColor(color, row, index){
      this.setState({selectedColor: color});
      this.state.currentGuess[0] = color;
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MasterMind</h1>
        </header>
        <br />

       <div id='myTable'>
         <Board selectedColor= {this.state.selectedColor} currentGuess={this.state.currentGuess} />
       </div>

        <ColorList selectColor={this.selectColor}/>
        <StartButton colors={this.state.colors} />

        
      </div>

    );
  }
}

export default App;

