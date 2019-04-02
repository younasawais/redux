import React            from 'react';
import { connect }      from 'react-redux';
import { cardStyle }    from './styles/styles';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
     // value : ""
    })
  }


  render(){
    return(
    <div style={cardStyle}>
      <h2>Comments</h2>
      <p>Comment : <span>{this.props.reducerSettings.comment}</span></p>
      <p>Correct : <span>{this.props.reducerSettings.totalRight}</span></p>
      <p>Incorrect : <span>{this.props.reducerSettings.totalWrong}</span></p>
    </div>
    )
  }
}

export default connect(state => state)(Comments);
