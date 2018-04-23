
import React from 'react';
import './App.css';

export default class CheckButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArray: []
        };

     this.checkAnswer = this.checkAnswer.bind(this);

     //let responseArr = this.props.responseArr

    }


    componentDidMount(){

    }


    checkAnswer(){

    var solution = this.props.solutionArr;
    var answer = ["red","red","black", "blue"];

    console.log("solution ", solution);

    
    var check = [];
    
    for (var i = 0; i < solution.length; i++){
      if (solution[i] === answer[i]){
          check.push(answer[i] + " is in exact position")
      } else if (solution[i] !== answer[i] && solution.indexOf(answer[i]) !== -1){
          check.push(answer[i] + " is in the array")
       }
    }

        document.getElementById('feedback').innerHTML = check
}

    render() { 
  
        return (
            <React.Fragment>
                <div>Solution: {this.props.solutionArr}</div>
                <div>Answer:  ["red","red","black", "blue"]</div>
                <button onClick={this.checkAnswer}> Check </button> 
                <div id='feedback'> feedback </div> 
    
            </ React.Fragment>
            );
        }
    
    }