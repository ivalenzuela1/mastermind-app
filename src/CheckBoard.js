
import React from 'react';
import './App.css';

export default class CheckBoard extends React.Component{
    constructor(){
        super();
        this.state = { 
            colorArray: []
        };
    }

    componentDidMount(){

    }
   
   render() { 

  
    return (
        <React.Fragment>
            <span id='checkBoard'> </span>
        </ React.Fragment>
        );
    }

}

