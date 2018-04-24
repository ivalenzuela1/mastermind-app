
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
      if (solution[i] === answer[i]){
          check.push(answer[i] + ' is in exact position')
          checkDots.push('red dot');
          checkHTML += '<span class="redFeedback"></span>'


      } else if (solution[i] !== answer[i] && solution.indexOf(answer[i]) !== -1){
          check.push(answer[i] + ' is in the array')
          checkDots.push('white dot');
          checkHTML += '<span class="whiteFeedback"></span>'

       } else {
        check.push('no match')

       }
    }

    document.getElementById('feedback').innerHTML = check;
    document.getElementById('feedbackDots').innerHTML = checkDots;
    document.getElementById('feedbackBoard').innerHTML = checkHTML;
}

    render() { 
  
        return (
            <React.Fragment>
                <div>Solution: {JSON.stringify(this.props.solutionArr)}</div> <br />
                <div>Answer:  ['red','red','black', 'blue']</div> <br />
                <button onClick={this.checkAnswer}> Check </button> <br />
                <div id='feedback'></div> 
                <div id='feedbackDots'></div>
                <div id="feedbackBoard"></div>
            </ React.Fragment>
            );
        }
    
    }