import React from 'react';
import { cardStyle } from './styles/styles';
import { connect }   from 'react-redux';

class GivenInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
     //  value : ''
    })
  }


  render(){
    return(
    <div style={cardStyle}>
      <h2>Given Info</h2>
      <p>Given : <span> Here comes the definition or the word</span></p>
      <hr/><p>Status : <span> {this.props.reducerSettings.appStatus} </span></p>
      <p>NR : <span> 1 / {this.props.reducerLibraryFiltered.word.length + 1}</span></p>
      <p>Start Range : <span>{this.props.reducerSettings.startRange}</span></p>
      <p>End Range : <span>{this.props.reducerSettings.endRange}</span></p>
      <p>Mode : <span>{this.props.reducerSettings.mode}</span></p>
      <p>Random : <span>{this.props.reducerSettings.random}</span></p>
      <p>Category : <span>{this.props.reducerSettings.category}</span></p>
    </div>
    )
  }
}

export default connect(state => state)(GivenInfo);
