
import React from 'react';
import './App.css';
import SingleCircle from './SingleCircle.js';

export default class SingleRow extends React.Component{
    constructor(){
        super();
        this.state = { 
            color: ''
        };
    }

      /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


   render() { 

      let circles = [];
      let rounds  = 4;
      for (let i = 0; i < rounds; i++){
          circles.push( <SingleCircle key={i} id={i} />)
      }

    return (
       
        <React.Fragment>
            <div>{circles}</div>
        </ React.Fragment>
        );
    }

}