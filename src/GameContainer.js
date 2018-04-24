import React from 'react';

export default class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            colorArray: []
        };

        this.selectColor = this.selectColor.bind(this);
        this.createTable = this.createTable.bind(this);

    }

componentDidMount(){
    this.createTable()
}

selectColor(){
    console.log("testtttttttting");
}

createTable = () => {

    let html = '<table id="myTable">';

    html += '<tbody>';

    for (var i = 0; i < 5; i++){
        html += `<tr id='row${i}'>
                     <td class='emptyDot' id='row${i}_1' onclick='this.selectColor'></td>
                     <td class='emptyDot' id='row${i}_2'></td>
                     <td class='emptyDot' id='row${i}_3'></td>
                     <td class='emptyDot' id='row${i}_4'></td>
                     <td class='emptySquare' id='feedback_${i}'></td>
                 </tr>`
    }
      

    html +=  '</tbody>';
    html +=  '</table><br>';



    document.getElementById('thisTable').innerHTML = html;



}

 render() {
    
    return (
       <React.Fragment>

           <div id='thisTable'></div>

        </ React.Fragment>
      );
   }

}