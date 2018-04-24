
import React from 'react';
import './App.css';

export default class SelectColors extends React.Component{
    constructor(){
        super();
        this.state = { 
            colorArray: []
        };

     this.selectColor = this.selectColor.bind(this);
     this.myFunction = this.myFunction.bind(this);

    }

    componentDidMount(){

    }


       /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

   myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
   }

// Close the dropdown if the user clicks outside of it

selectColor(){

  window.onclick = function(event){

      console.log("testtttt");
      //console.log(event.href);

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    
    }   
}



// <button onClick={this.myFunction} class="emptyDot" id='test'></button>

   
   render() { 

  
    return (
        <React.Fragment>
            <div className="dropdown">
           

            <button onClick={this.myFunction} className="emptyDot" id='test2'></button>
            
            <div id="myDropdown" className="dropdown-content">
                <a href="#red">red</a>
                <a href="#blue">blue</a>
                <a href="#yellow">yellow</a>
            </div>
            </div>
        </ React.Fragment>
        );
    }

}
