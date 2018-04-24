
import React from 'react';
import './App.css';

export default class SelectColors extends React.Component{
    constructor(){
        super();
        this.state = { 
            colorArray: []
        };

     this.myFunction = this.myFunction.bind(this);

     this.changeToRed = this.changeToRed.bind(this);
     this.changeToOrange = this.changeToOrange.bind(this);
     this.changeToGreen = this.changeToGreen.bind(this);
     this.changeToYellow = this.changeToYellow.bind(this);

    }

    componentDidMount(){

    }


       /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

   myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
   }

   changeToRed(){
    document.getElementById("circle1").style.backgroundColor = "red"

   }

   changeToOrange(){
    document.getElementById("circle1").style.backgroundColor = "orange"

   }

   changeToGreen(){
    document.getElementById("circle1").style.backgroundColor = "green"

   }

   changeToYellow(){
    document.getElementById("circle1").style.backgroundColor = "yellow"
   }



// <button onClick={this.myFunction} class="emptyDot" id='test'></button>

   
   render() { 

  
    return (
        <React.Fragment>
            <span>
                <div className="dropdown">
                <div onClick={this.myFunction} className="emptyDot" id="circle1"></div>
                <div id="myDropdown1" className="dropdown-content">
                    <a onClick={this.changeToRed}>red</a>
                    <a onClick={this.changeToOrange}>orange</a>
                    <a onClick={this.changeToGreen}>green</a>
                    <a onClick={this.changeToYellow}>yellow</a>
                </div>
                </div>
            </span>

            <span>
                <div className="dropdown">
                <div onClick={this.myFunction} className="emptyDot" id="circle2"></div>
                <div id="myDropdown2" className="dropdown-content">
                    <a onClick={this.changeToRed}>red</a>
                    <a onClick={this.changeToOrange}>orange</a>
                    <a onClick={this.changeToGreen}>green</a>
                    <a onClick={this.changeToYellow}>yellow</a>
                </div>
                </div>
            </span>

            <span>
                <div className="dropdown">
                <div onClick={this.myFunction} className="emptyDot" id="circle3"></div>
                <div id="myDropdown3" className="dropdown-content">
                    <a onClick={this.changeToRed}>red</a>
                    <a onClick={this.changeToOrange}>orange</a>
                    <a onClick={this.changeToGreen}>green</a>
                    <a onClick={this.changeToYellow}>yellow</a>
                </div>
                </div>
            </span>

            <span>
                <div className="dropdown">
                <div onClick={this.myFunction} className="emptyDot" id="circle4"></div>
                <div id="myDropdown4" className="dropdown-content">
                    <a onClick={this.changeToRed}>red</a>
                    <a onClick={this.changeToOrange}>orange</a>
                    <a onClick={this.changeToGreen}>green</a>
                    <a onClick={this.changeToYellow}>yellow</a>
                </div>
                </div>
            </span>



            
        </ React.Fragment>
        );
    }

}

/*
<div className="dropdown">
            <button onClick={this.myFunction} className="emptyDot" id='test2'></button>
            <div id="myDropdown" className="dropdown-content">
                <a href="#red">red</a>
                <a href="#blue">blue</a>
                <a href="#yellow">yellow</a>
            </div>
            </div>
            */