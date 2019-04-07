import React    from 'react';
import {Child1} from './child1';

export class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
     timerStopped : true,
     timerStarted : false,
     seconds      : 0
    })
    this.handleTimerStart  = this.handleTimerStart.bind(this);
    this.handleTimerStop   = this.handleTimerStop.bind(this);
    this.handleTimerReset  = this.handleTimerReset.bind(this);
    this.handleSetInterval = this.handleSetInterval.bind(this);
  }

  handleSetInterval(started){
    if (started) {
      this.interval = setInterval(() => {
        this.setState({
          seconds : this.state.seconds + 1,
        });
      }, 1000)
    }
  }

  handleTimerStart(e){
    e.preventDefault();
    this.setState({
      timerStopped : false,
      timerStarted : true,
    });
    this.handleSetInterval(true);
  }

  handleTimerStop(e){
    e.preventDefault();
    this.setState({
      timerStopped : true,
      timerStarted : false,
    });
    clearInterval(this.interval);
  }

  handleTimerReset(e){
    e.preventDefault();
    this.setState({
      seconds : 0,
    });
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return(
    <div>
      <button onClick={this.handleTimerStart}>Start</button>
      <button onClick={this.handleTimerStop}>Stop</button>
      <button onClick={this.handleTimerReset}>Reset</button>
      <p>Time : {this.state.seconds}</p>
    </div>
    )
  }
}
