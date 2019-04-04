import React            from 'react';
import { cardStyle }    from './styles/styles';
import { connect }      from 'react-redux';

class Debug extends React.Component {
  render(){
    const libLength = this.props.reducerSettings.endRange - this.props.reducerSettings.startRange + 1;
    return(
    <div style={cardStyle}>
      <h2>Debug</h2>
      <p>Full lib length : <span>{this.props.reducerFullLibrary.word.length}</span></p>
      {/* <p>Filtered lib length : <span>{this.props.reducerLibraryFiltered.word.length}</span></p> */}
      <p>Filtered lib length : <span>{libLength}</span></p>
      <p>App Status : <span>{this.props.reducerSettings.appStatus}</span></p>
      <p>category : <span>{this.props.reducerSettings.category}</span></p>
      <p>totalWrong : <span>{this.props.reducerSettings.totalWrong}</span></p>
      <p>totalRight : <span>{this.props.reducerSettings.totalRight}</span></p>
      <p>answers : <span>{this.props.reducerSettings.answers}</span></p>
      <p>mode : <span>{this.props.reducerSettings.mode}</span></p>
      <p>random : <span>{this.props.reducerSettings.random}</span></p>
      <p>temp : <span>{this.props.reducerSettings.temp}</span></p>
    </div>
    )
  }
}

export default connect(state => state)(Debug);
