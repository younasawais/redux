import React, {Component} from 'react';

var pressedButton = "";

export class Test extends Component {
  constructor(props){
    super(props);
    this.state = ({
      timerStarted  : false,
      minutes       : 0,
      seconds       : 0, ``
      milliseconds  : 0
    });
    this.timer = this.timer.bind(this);
  }
  

  timer(e){
    e.preventDefault();
    let internalText = e.target.textContent;
    let timerStarted = this.state.timerStarted;
    if (internalText === "Start") {
      this.setState({timerStarted : true});
      timerStarted = true;
    } else if (internalText === "Stop"){
      this.setState({timerStarted : false});
      timerStarted = false;
    } else if (internalText === "Reset"){
      this.setState({minutes : 0, seconds : 0 , milliseconds : 0});
    } else if (internalText === "Lap"){
      
    }
    console.log({internalText : internalText});
    console.log({timerStarted : timerStarted});
    
    /**** Interval ****/
    let newMilliSeconds = this.state.milliseconds + 10;
    if (timerStarted) {
      this.interval = setInterval(() => {
        this.setState({milliseconds :  newMilliSeconds});
      },1000);
    } else if(!timerStarted){
      clearInterval(this.interval);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  
  render(){
    return(
      <div style={timerStyle}>
        <button onClick={this.timer}>Start</button>
        <button onClick={this.timer}>Stop</button>
        <button onClick={this.timer}>Reset</button>
        <button onClick={this.timer.bind(this)}>Lap</button>
        <p>{this.state.minutes} : {this.state.seconds} : {this.state.milliseconds}</p>
      </div>
    )
  }
}





const timerStyle = {
  width : 400,
  marginRight : 'auto',
  marginLeft : 'auto',
}
