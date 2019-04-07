import React    from 'react';
import {Child1} from './child1';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
     value      : 0
    })
    this.handelStart  = this.handelStart.bind(this);
  }

  handelStart(e){
    e.preventDefault();

  }


  render(){
    return(
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <button onClick={this.handelStart}>Start</button>
    <p>Home Page</p>
  </div>
)
