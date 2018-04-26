import React from 'react';
import './App.css';

export default class ColorList extends React.Component{
    constructor(){
        super();
        this.state = { 
            selectedColor: ''
        };

        this.selectRed = this.selectRed.bind(this);
        this.selectBlue = this.selectBlue.bind(this);
        this.selectGreen = this.selectGreen.bind(this);
        this.selectYellow = this.selectYellow.bind(this);
        this.selectOrange = this.selectOrange.bind(this);
    }

    selectRed(){
        console.log("you selected red");
        this.props.selectColor('red');
    }

    selectBlue(){
        console.log("you selected blue");
        this.props.selectColor('blue');
    }

    selectGreen(){
        console.log("you selected green");
        this.props.selectColor('green');
    }

    selectYellow(){
        console.log("you selected yellow");
        this.props.selectColor('yellow');
    }

    selectOrange(){
        console.log("you selected orange");
        this.props.selectColor('orange');
    }


    render() {
    
        return (
            <React.Fragment>
                <div className='colorContainer'>
                    <span className='redDot' onClick={this.selectRed}></span>
                    <span className='blueDot' onClick={this.selectBlue}></span>
                    <span className='greenDot' onClick={this.selectGreen}></span>
                    <span className='yellowDot' onClick={this.selectYellow}></span>
                    <span className='orangeDot' onClick={this.selectOrange}></span>
                </div>
                    <br />
            </React.Fragment>
        );
      }

    }
    
