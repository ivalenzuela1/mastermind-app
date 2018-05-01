import React from 'react';
import SingleRow from './SingleRow.js';
import CheckBoard from './CheckBoard.js';

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArray: []
        };
    }

componentDidMount(){
}



myFunction(id) {

    console.log(id);
    //document.getElementById("myDropdown1").classList.toggle("show");

   }

 render() {
    let rows = [];
    let rounds  = 6;
    for (let i = 0; i < rounds; i++){
        rows.push( <div><SingleRow key={i} 
                         selectedColor={this.props.selectedColor} 
                         currentGuess={this.props.currentGuess}
                    />
                    <div className='checkBoard'><CheckBoard /></div>
                    </div>
                )
    }
    
    return (
       <React.Fragment>
          <div>{rows}</div>
          <br />
           

        </ React.Fragment>
      );
   }

}