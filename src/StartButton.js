
import React from 'react';
import './App.css';
import CheckButton from './CheckButton.js';

export default class StartButton extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            colorArray: []
        };

     this.generateRandom = this.generateRandom.bind(this);
     this.createHTML = this.createHTML.bind(this);

    }
    componentDidMount(){
    }


   getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
   }


   generateRandom = () => {
       var colors = this.props.colors;
       var solutionArr = [
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)],
                            colors[this.getRandomInt(6)]
                        ]

    console.log(solutionArr);
    this.setState({colorArray: solutionArr}) 

   }


   createHTML(){
    
    let array = ["red", "blue", "green", "red"]; //this.state.colorArray;
    let html = '<div>';
    for (var i = 0; i < array.length; i++){
        if (array[i] === "red"){
            html += '<span className="redDot"></span>'
        } else if (array[i] === "blue"){
            html += '<span className="blueDot"></span>'
        } else if (array[i] === "green"){
            html += '<span className="greenDot"></span>'
      }
    }

    html += '</div>'
    console.log("html", html);

    let thisIsMyCopy = (html)
    document.getElementById('colorList').innerHTML = html;
    
     //$('#colorList').html('<span className="redDot"></span>');

     return thisIsMyCopy

   }



   render() { 
  
    return (
        <React.Fragment>
            <div>{this.state.colors}</div>
            <button onClick={this.generateRandom}> Start Game </button> 
            <div id="colors"> Colors </div> 
            <span className='redDot'></span>
            <span className='blueDot'></span>
            <span className='greenDot'></span>
            <span className='yellowDot'></span>
            <span className='whiteDot'></span>
            <div id="colorList">{this.createHTML}</div> 


            <CheckButton solutionArr={this.state.colorArray}/>

        </ React.Fragment>
        );
    }

}