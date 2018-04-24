
import React from 'react';
import './App.css';

export default class SingleCircle extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            color: ''
        };
        
     this.myFunction = this.myFunction.bind(this);
     this.changeToRed = this.changeToRed.bind(this);
     this.changeToOrange = this.changeToOrange.bind(this);
     this.changeToGreen = this.changeToGreen.bind(this);
     this.changeToYellow = this.changeToYellow.bind(this);
    }


    componentDidMount(){
        //console.log(this.props.id);
    }




   myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
    
   }

   changeToRed(id){
       console.log(id)
    //document.getElementById('circle').classList.add('redDot');
    //this.setState({color: 'red'}) 
    
   }

   changeToOrange(){
    document.getElementById('circle').classList.add('orangeDot');
    this.setState({color: 'orange'}) 

   }

   changeToGreen(){
    document.getElementById('circle').classList.add('greenDot');
    this.setState({color: 'green'}) 
   }

   changeToYellow(){
    document.getElementById('circle').classList.add('yellowDot');
    this.setState({color: 'yellow'}) 
   }


   render() { 

    return (
       
        <React.Fragment>

                <span>
                    <div className='dropdown'>
                    <div onClick={this.myFunction} className='emptyDot' id={this.props.id}></div>
                    <div id='myDropdown' className='dropdown-content'>
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