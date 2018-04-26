

import React from 'react';
import './App.css';

export default class CheckButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArray: []
        };

     this.checkAnswer = this.checkAnswer.bind(this);

    }


    componentDidMount(){

    }


    checkAnswer(){

    var solution = this.props.solutionArr;
    var answer = ['red','red','black', 'blue'];

    console.log('solution ', solution);

    var check = [];
    var checkDots = [];
    var checkHTML = '';
    
    for (var i = 0; i < solution.length; i++){
      if (answer[i] === solution[i]){
          
          //remove from list to remove duplication..
          
          check.push(answer[i] + ' is in exact position')
          checkDots.push('red dot');
          checkHTML += '<span class="redFeedback"></span>'

          answer.splice(i, 1);


      } else if (answer[i] !== solution[i] && answer.indexOf(solution[i]) !== -1){
          check.push(answer[i] + ' is in the array')
          checkDots.push('white dot');
          checkHTML += '<span class="whiteFeedback"></span>'

          //answer.splice(i, 1);

       } else {
        check.push('no match')

       }
    }

    document.getElementById('checkBoard').innerHTML = checkHTML;
}

    render() { 
  
        return (
            <React.Fragment>
                <div>Answer:  ['red','red','orange', 'blue']</div> <br />
                <button onClick={this.checkAnswer}> Check </button> <br />
            </ React.Fragment>
            );
        }
    
    }