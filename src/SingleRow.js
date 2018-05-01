
import React from 'react';
import './App.css';

export default class SingleRow extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            currentGuess: [null, null, null, null]
        };

        this.changeColor = this.changeColor.bind(this);
        this.setToBlue = this.setToBlue.bind(this);
    }

    componentDidMount(){
        console.log(this.props.currentGuess);
    }

    setToBlue(){
        console.log("set this one to blue");
        document.getElementById('1').classList.add('blueDot');
    }

    setToRed(){
        console.log("set this one to red");
        document.getElementById('1').classList.add('redDot');
    }

    changeColor(){
        if (this.props.selectedColor === "red"){
            console.log("change this to red");
            this.setState({color: 'red'});

        } else if (this.props.selectedColor === "blue"){
            console.log("change this to blue");
            this.setState({color: 'blue'});

        } else if (this.props.selectedColor === "green"){
            console.log("change this to green");
            this.setState({color: 'green'});
        }
    }

   render() { 
      let circles = [];
      for (let i = 0; i < 4; i++){
          let id = (new Date()).getTime() + i;
          if (this.props.selectedColor === "red"){
             circles.push(<div id={i} className='emptyDot' onClick={this.setToRed}></div>)
          } else if (this.props.selectedColor === "blue"){
            circles.push(<div id={i} className='emptyDot' onClick={this.setToBlue}></div>)
         } else {
            circles.push(<div id={i} className='emptyDot'></div>)
         }
    }
      
    return (
       
        <React.Fragment>
            <div>{circles}</div>
        </ React.Fragment>
        );
    }

}