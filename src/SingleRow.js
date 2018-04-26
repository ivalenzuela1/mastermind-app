
import React from 'react';
import './App.css';

export default class SingleRow extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArr: []
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
      let guessArr = this.props.currentGuess;
      console.log("guess", guessArr);
      for (let i = 0; i < guessArr.length; i++){
          console.log("test");
          let id = (new Date()).getTime() + i;
          if (guessArr[i] == 'blue'){
             circles.push(<div id={i} onClick={this.setToBlue}></div>)
          } else if (guessArr[i] == 'red'){
            circles.push(<div className='redDot' id={id}></div>)
          } else if (guessArr[i] == 'green'){
            circles.push(<div className='greenDot' id={id}></div>)

          } else {
            circles.push(<div className='emptyDot' id={id}></div>)
          }
          
      }
      
    return (
       
        <React.Fragment>
            <div>{circles}</div>
        </ React.Fragment>
        );
    }

}