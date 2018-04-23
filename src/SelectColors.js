
import React from 'react';
import ReactInputSelect from 'react-input-select';
import './App.css';

export default class SelectColors extends React.Component{
    constructor(){
        super();
        this.state = { 
            colorArray: []
        };

     this.selectColor = this.selectColor.bind(this);

    }

    componentDidMount(){

    }


   selectColor = () => {

   }
   
   render() { 
  
    return (
        <React.Fragment>

            <ReactInputSelect
                    data = {['red', 'yellow']}
                    value = ''
             />
             

        </ React.Fragment>
        );
    }

}
