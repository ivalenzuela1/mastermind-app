
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
                            colors[this.getRandomInt(4)],
                            colors[this.getRandomInt(4)],
                            colors[this.getRandomInt(4)],
                            colors[this.getRandomInt(4)]
                        ]

    console.log(solutionArr);
    this.setState({colorArray: solutionArr}) 

    this.createHTML(solutionArr)

   }

   createHTML(solutionArr){
    let array = solutionArr;
    let html = '<div>';
    for (var i = 0; i < array.length; i++){
        if (array[i] === "red"){
            html += '<span class="redDot"></span>'
        } else if (array[i] === "blue"){
            html += '<span class="blueDot"></span>'
        } else if (array[i] === "green"){
            html += '<span class="greenDot"></span>'
        } else if (array[i] === "orange"){
        html += '<span class="orangeDot"></span>'
       } else if (array[i] === "yellow"){
        html += '<span class="yellowDot"></span>'
      }
    }

    html += '</div>'
    console.log("html", html);
    document.getElementById('colorList').innerHTML = html;

   }



   render() { 
  
    return (
        <React.Fragment>
            <button onClick={this.generateRandom}> Start Game </button>
            <br /> <br />
            <div id="colorList">{this.createHTML}</div> 
            <CheckButton solutionArr={this.state.colorArray}/>
        </ React.Fragment>
        );
    }

}