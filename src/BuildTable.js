import React from 'react';
import SingleRow from './SingleRow.js';

export default class BuildTable extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArray: []
        };

        this.selectColor = this.selectColor.bind(this);
    }

componentDidMount(){
}

selectColor(){
    console.log("testtttttttting");
}

myFunction(id) {

    console.log(id);
    //document.getElementById("myDropdown1").classList.toggle("show");


   }

 render() {
    let rows = [];
    let rounds  = 6;
    for (let i = 0; i < rounds; i++){
        rows.push( <SingleRow key={i}/>)
    }
    
    return (
       <React.Fragment>
          <div>{rows}</div>
        <br />
           

        </ React.Fragment>
      );
   }

}